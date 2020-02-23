const express = require("express");
const router = express.Router();
const Event = require("../model/event.model");

router.get('/', getEvents);
router.get('/:id', getEvents);
router.post('/', createEvent);

function getEvents(req, res, next) {
    if (req.params.id !== undefined) {
        Event.findOne({_id: req.params.id}, (err,event) => {
            if(err){
                res.json(err);
            } else {
                res.json(event);
            }
        });
    } else {
        Event.find({'location': new RegExp(req.query['location'], 'i') }, (err, events) => {
            if(err){
                res.json(err);
            } else {
                res.json(events);
            }
        });
    }
}


function createEvent( req, res, next) {
    var event = new Event(req.body);
    event.save((err, event) => {
        if(err){
            res.json(err);
        } else {
            res.json(event);
        }
    });

    
}

module.exports = router;
