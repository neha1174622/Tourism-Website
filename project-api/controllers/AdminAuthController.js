const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
routes.post("/", async(req, res)=>{
    // let username = req.body.username;
    // let password = req.body.password;

    let {username, password} = req.body;
    let result = await Admin.find({ username : username });
    if(result.length>0){
        if(result[0].password == sha1(password))
        {
            let obj = { id : result[0]._id };
            let token = jwt.sign(obj, "the stepping stone");
            
            res.send({success : true, token })
        }else{
            
            res.send({ success : false});
        }
    }else{
        res.send({ success : false});
    }
})

module.exports = routes;