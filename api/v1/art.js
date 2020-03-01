const express = require("express");
const router = express.Router();
const Art = require("../model/art.model");

router.get('/', getArt);
router.get('/:id', getArt);
router.post('/', createArt);
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
        Art.find({}, (err, art) => {
            if(err){
                res.json(err);
            } else {
                res.json(art);
            }
        });
    }
}

function createArt(req, res, next) {
    var art = new Art(req.body);
    art.save((err, art) => {
        if(err){
            res.json(err);
        } else {
            res.json(art);
        }
    });
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
module.exports = router;