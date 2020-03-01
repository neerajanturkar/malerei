const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
//const Session = require("../model/session.model");
//router.get('/', getUser);
//router.post('/login', login);
// router.post('/register', register);

// function getUser(req, res, next) {
//     res.json({"message":"User added successfuly"});
// }

router.post('/register', (req, res, next) => {
  // var user = new User(req.body);
    // user.save(function(err, user){
    //     if (err) {
    //         res.json(err); 
    //         return;
    //     } else { 
    //         res.json(user);
    //     }   
    // });

    console.log("inside register")
   // bcrypt.hash(req.body.password, 10).then(hash => {
    //  console.log("inside bcrypt")
    const user = new User(req.body);
    user.save()
      .then( result => {
        res.status(200).json({
          message: 'user created',
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
});


// function login(req, res, next) {
//     console.log("in login");
//     console.log(req.body.password);
//     User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
//         if(err){
//             res.send(err);
//         } else {
//             var session = new Session({user_id: user._id});
//             session.save((err,session_res) => {
//                 if(err){
//                     res.send(err);
//                 } else {
//                     var response = {};
//                     response['session_id'] = session_res._id;
//                     response['user'] = user;
//                     res.json(response);
//                 }
//             });
//         }
//     });
// }
router.post("/login", (req,res,next) => {
    let fetchedUser;
  User.findOne({ email: req.body.email, password: req.body.password })
    .then( user => {
      if(!user){
        return res.status(401).json({
          message: 'Authentication failed!'
        });
      }
      fetchedUser = user;
      console.log(fetchedUser);
      //return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      // if(!result) {
      //   return res.status(401).json({
      //     message: 'Authentication failed!'
      //   });
      // }
      // console.log(result);

      const token = jwt.sign({name: fetchedUser.name, type: fetchedUser.type}, 
        "secret_this_should_be_longer",
        { expiresIn: "1h"});
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          name: fetchedUser.name,
          type: fetchedUser.type
        });
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Authentication failed!'
      }); 
    });
})


module.exports = router;
