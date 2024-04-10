const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");
const rand = require("random-string") //npm i random-string

routes.post("/", async(req, res)=>{  //storing data in data base from from
    
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true }); 
})
// we can do this also for userlist in admin , but we have created different controller name usercontroller
// routes.get("/", async(req, res)=>{ // sending data http://localhost:8080/api/signup
//     let result = await User.find();
//     res.send(result);
// })
 
// screen 1 api to generate and store otp wrt to username
routes.post("/forgot", async(req, res)=>{
    let username = req.body.username;
    let result = await User.find({ email : username });
    if(result.length >= 1)
    {
        let otp = rand({ length : 6, numeric : true, letters: false, special: false }) // create random no. ,only numeric with length 6
        await User.updateMany({ email : username }, {otp : otp}); //set otp from null to current otp where email(in model) match current username
        res.send({ success : true, otp : otp });
        // send otp and  success :true at browser console.
    }
    else{
        res.send({ success : false });
    }
})
// localhost:8080/api/signup/changepassword
//screen 3 api for changed password storage
routes.post("/changepassword", async(req, res)=>{
    await User.updateMany({ otp : req.body.otp }, { password : sha1(req.body.password) }); //store password  w.r.t to OTP
    res.send({success : true});
})

module.exports = routes;