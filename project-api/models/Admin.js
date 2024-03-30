require("../config/db");

const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    username : String,
    password : String
})

const Admin = mongoose.model("admin", AdminSchema)

module.exports = Admin;