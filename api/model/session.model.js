const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sessionSchema = mongoose.Schema({
    user_id: { type : Schema.Types.ObjectId , require: true , ref: 'users'},
    created_on : {type : Date , default: Date.now() }
});

const Session = module.exports = mongoose.model('session', sessionSchema);