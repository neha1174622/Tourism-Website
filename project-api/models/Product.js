require("../config/db");

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : String,
    detail : String,
    image : String,
    
})

module.exports = mongoose.model("product", ProductSchema);