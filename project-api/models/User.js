require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
  email: String,
  password: String,
  
  gender: String,
  city: String,
  state: String,
  contact: String,
  address: String,
  status : { type : Number, default : 1 },
  otp : { type : Number, default : null }
})

const User = mongoose.model("user", UserSchema)

module.exports = User;