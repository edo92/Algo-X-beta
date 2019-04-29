var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventsSchema = new Schema({

    EventName:{
        type: String,
        require: true,
        unique: true,
    },

    Fighters:[{
        type: Object,
        required: true,
    }],

    EventDate:{
        type: String, 
        required: true,
    },
    
    EventCreatedAt:{
        type: Date, 
        default: Date.now,
        required: true,
    },
   
});

var Events = mongoose.model("Events", EventsSchema)
module.exports = Events;