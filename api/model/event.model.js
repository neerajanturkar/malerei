const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: { type : String , require: true},
    location: { type : String, require: true},
    from:	{ type: Date, require: true },
    to:	{ type: Date, require: true },
    image_url: { type: String },
    time: { type: String },
    ticket_information: [
        {
            ticket_type: {type: String},
            price: {type: Number},
        }
    ]
});

const Event = module.exports = mongoose.model('event', eventSchema);