const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");

routes.post("/", async(req, res)=>{
    
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true }); 
})

module.exports = routes;