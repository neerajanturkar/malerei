const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type : String , require: true},
    type: { type : String, require: true},
    email:	{ type: String, require: true, unique: true },
    password: { type: String }
});

const User = module.exports = mongoose.model('user', userSchema);