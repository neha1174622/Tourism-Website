const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")

routes.post("/", async(req, res)=>{
    let email = req.body.email; // abc
    let password = req.body.password;
    let result = await User.find({ email : email });
    
    if(result.length > 0)
    {
        if(result[0].password == sha1(password))
        {
            res.send({ success : true })
        }
        else{
            res.send({ success : false, errType : 2 });
        }
        
    }
    else{
        res.send({ success : false, errType : 1 });
    }
})

module.exports = routes;