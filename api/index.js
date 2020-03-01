const path = require("path");
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

const user = require("./v1/user");
const art = require("./v1/art");
const event = require("./v1/event");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));
app.use(cors());

app.use('/api/v1/users', user);
app.use('/api/v1/arts', art); 
app.use('/api/v1/events', event); 

mongoose.connect('mongodb://localhost:27017/malerei');
mongoose.connection.on('connected', () => {
    console.log("Mongodb connected");
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(PORT, () => console.log(`Server started on ${PORT}`));