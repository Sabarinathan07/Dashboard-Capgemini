const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    january: { type: String },
    february: { type: String },
    march: { type: String },
    april: { type: String },
    may: { type: String },
    june: { type: String },
    july: { type: String },
    august: { type: String },
    september: { type: String },
    october: { type: String },
    november: { type: String },
    decmber: { type: String }
    
})

const DataX = mongoose.model("data", DataSchema);
// const User = mongoose.model("user", userSchema);

module.exports = Datax;
