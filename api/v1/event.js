const express = require("express");
const multer = require('multer');
const router = express.Router();
const Exhibition = require("../model/event.model");
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

// router.get('/', getEvents);
// router.get('/:id', getEvents);
// router.post('/', createEvent);

// function getEvents(req, res, next) {
//     if (req.params.id !== undefined) {
//         Event.findOne({_id: req.params.id}, (err,event) => {
//             if(err){
//                 res.json(err);
//             } else {
//                 res.json(event);
//             }
//         });
//     } else {
//         Event.find({'location': new RegExp(req.query['location'], 'i') }, (err, events) => {
//             if(err){
//                 res.json(err);
//             } else {
//                 res.json(events);
//             }
//         });
//     }
// }


router.post('/', multer({ storage: storage }).single("image"), ( req, res, next) => {
    console.log()
    const url = req.protocol + '://' + req.get("host");
    var exhibition = new Exhibition({
        name: req.body.name,
        from: req.body.from,
        to: req.body.to,
        time: req.body.time,
        location: req.body.location,
        image_url: url + "/images/" + req.file.filename,
        
    });

    exhibition.save().then( createdEvent => {
        res.status(201).json({
            message: "Event added successfully",
            exhibition:{
                ...createdEvent,
                id: createdEvent._id,
                // name: createdEvent.name,
                // from: createdEvent.from,
                // to: createdEvent.to,
                // time: createdEvent.time,
                // image_url: createdEvent.image_url
            }
        })
        console.log(createdEvent)
    })
    
});

router.get("/", (req, res, next) => {
    Exhibition.find().then(result => {
      res.status(200).json({
        message: "Event fetched successfully!",
        exhibitions: result
      });
    });
  });
 
  
  router.get("/:id", (req, res, next) => {
    Exhibition.findById(req.params.id).then(event => {
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: "Event not found!" });
      }
    });
  });

module.exports = router;
