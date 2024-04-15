require("../config/db")
const mongoose = require("mongoose");

const DestinationSchema = mongoose.Schema({
    title : String,
    category : String,
    detail : String,
    image : String

})

module.exports = mongoose.model("destination", DestinationSchema)