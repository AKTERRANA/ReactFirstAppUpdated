const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title:{type:String}
})

module.exports = mongoose.model("Data", dataSchema)