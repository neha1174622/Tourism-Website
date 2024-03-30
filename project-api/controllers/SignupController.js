const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");

routes.post("/", async(req, res)=>{  //storing data in data base from from
    
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true }); 
})

routes.get("/", async(req, res)=>{ // sending data http://localhost:8080/api/signup
    let result = await User.find();
    res.send(result);
})

module.exports = routes;