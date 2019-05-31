var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GeneralStatsSchema = new Schema({
    Stats: {
        weightClass:{
            type: Object,
            require: true
        },
        
        fttp: {
            type: Object,
            require: true
        },

        stance: {
            type: Object,
            require: true
        },

        age: {
            type: Object,
            require: true
        }
    }

});

var GeneralStats = mongoose.model("GeneralStats", GeneralStatsSchema)
module.exports = GeneralStats;