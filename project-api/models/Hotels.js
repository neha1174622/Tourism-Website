require("../config/db");

const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    name : String,
    address : String,
    city : String,
    contact : String,
    email : String
})

module.exports = mongoose.model("hotel", HotelSchema);