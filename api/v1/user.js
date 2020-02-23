const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const Session = require("../model/session.model");
router.get('/', getUser);
router.post('/login', login);
router.post('/register', register);


function getUser(req, res, next) {
    res.json({"message":"User added successfuly"});
}

function register(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, user){
        if (err) {
            res.json(err); 
            return;
        } else { 
            res.json(user);
        }   
    });
}


function login(req, res, next) {
    console.log("in login");
    console.log(req.body.password);
    User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
        if(err){
            res.send(err);
        } else {
            var session = new Session({user_id: user._id});
            session.save((err,session_res) => {
                if(err){
                    res.send(err);
                } else {
                    var response = {};
                    response['session_id'] = session_res._id;
                    response['user'] = user;
                    res.json(response);
                }
            });
        }
    });
}



module.exports = router;