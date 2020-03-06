const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: { type : String , require: true},
    from:	{ type: String, require: true },
    to:	{ type: String, require: true },
    time: { type: String },
    location: { type : String, require: true},
    image_url: { type: String },
    ticket_information: [
        {
            ticket_type: {type: String},
            price: {type: String},
        }
    ]
});

 module.exports = mongoose.model('Exhibition', eventSchema);