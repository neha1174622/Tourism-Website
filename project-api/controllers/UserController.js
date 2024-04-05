const routes = require("express").Router();

const User = require("../models/User");

// for api for users list in admin
routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await User.updateMany({ _id : id }, req.body);
    res.send({ success : true });
})

module.exports = routes;