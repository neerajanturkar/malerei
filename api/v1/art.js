const express = require("express");
const multer = require('multer');
const router = express.Router();
const Art = require("../model/art.model");
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    destination: (  req, file, cb) =>{
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if(isValid){
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});

router.get('/', getArt);
router.get('/:id', getArt);

router.put('/:id/bid', addBid);

function getArt(req, res, next) {
    if (req.params.id !== undefined) {
        Art.findOne({_id: req.params.id}, (err,art) => {
            if(err){
                res.json(err);
            } else {
                res.json(art);
            }
        });
    } else {

        if(req.query.search === undefined) {
            Art.find({}, (err, art) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(art);
                }
            });
        } else {
            Art.find({ $or: [{'location': new RegExp(req.query.search, 'i')},
                             {'artist': new RegExp(req.query.search, 'i')}] }, (err, art) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(art);
                }
            });
        }
    }
}

function addBid(req, res, next) {
    if(req.params.id !== undefined) {
        Art.findOne({_id:req.params.id}, (err, art) => {
        if(req.body.bid !== undefined || req.body.user_id) {
            if(art.curr_bid < req.body.bid) {
                art.bids.push({amount:req.body.bid, user_id:req.body.user_id});
                art.curr_bid = req.body.bid;
                art.save((err,art) => {
                    res.json({"success": true, "art": art , "message" : "Bid added successfully"});
                });
            } else {
                res.json({"success":false, "message":"Bid price cannot be less than current bid price" });            
            }
        } else {
            res.json({"success":false, "message":"Missing Bid price" });        
        }
    });
    } else {
        res.json({"success":false, "message":"Missing Art Id" });
    }
}


router.post('/', multer({ storage: storage }).single("image"), ( req, res, next) => {
    console.log(req.body)
    const url = req.protocol + '://' + req.get("host");
    var art = new Art({

        name: req.body.name,
        artist: req.body.artist,
        location: req.body.location,
        dimension: req.body.dimension,
        art_type: req.body.art_type,
        expiry:	req.body.expiry,
        curr_bid: req.body.starting_price,
        starting_price: req.body.starting_price,
        image_url: url + "/images/" + req.file.filename,
        status: req.body.status


    });
    console.log(art);
    art.save().then( createdArt => {
        res.status(201).json({
            message: "Art added successfully",
            art:{
                ...createdArt,
                id: createdArt._id,

            }
        })
        console.log(createdArt);
    })

});
module.exports = router;
