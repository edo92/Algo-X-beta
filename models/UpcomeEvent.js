var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UpcomeEventSchema = new Schema({
    EventName:{
        type: String,
        required: true,
    },
    
    EventDate:{
        type: String,
        required: true,
    },

    Fighter:{
        type: Object,
        required: true,
    },
});

var UpcomeEvent = mongoose.model("UpcomeEvent", UpcomeEventSchema)
module.exports = UpcomeEvent;