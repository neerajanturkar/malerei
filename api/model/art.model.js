const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artSchema = mongoose.Schema({
    name: { type : String , require: true},
    artist: { type : String, require: true},
    location: { type : String, require: true},
    dimension: { type : String, require: true},
    art_type: { type : String, require: true},
    expiry:	{ type: Date, require: true },
    curr_bid: { type: Number},
    starting_price: {type: Number},
    image_url: { type: String, require: true },
    status: { type: String, require:true, enum:['available','sold'] },
    bids: [
        {
            datetime: {type: Date, default: Date.now()},
            amount: {type: Number},
            user_id: {type: Schema.Types.ObjectId , require: true , ref: 'users'}
        }
    ]
});

const Art = module.exports = mongoose.model('art', artSchema);