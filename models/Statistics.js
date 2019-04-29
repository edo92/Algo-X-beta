var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StatisticsSchema = new Schema({

    Fighter: {
        type: Object,
    },

});

var Statistics = mongoose.model("Statistics", StatisticsSchema)
module.exports = Statistics;