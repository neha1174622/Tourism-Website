const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    let email = req.body.email; // abc
    let password = req.body.password;
    let result = await User.find({ email : email });
    
    if(result.length > 0)
    {
        if(result[0].password == sha1(password))
        {
            if(result[0].status == 1){
                let userobj = { id : result[0]._id };
                let token = jwt.sign(userobj, "the stepping stone");
                res.send({ success : true, token : token })

            }else{
                res.send({ success : false, errType : 3 });
            }
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