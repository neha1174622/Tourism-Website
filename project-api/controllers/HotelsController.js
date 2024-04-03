const routes = require("express").Router();
const Hotels = require("../models/Hotels")



// return all data
routes.get("/", async(req, res)=>{
    let result = await Hotels.find();
    res.send(result);
})
// return perticular data
routes.get("/:id", async(req, res)=>{
    let result = await Hotels.find({_id : req.params.id});
    res.send(result[0]);
})
routes.post("/", async(req, res)=>{
    await Hotels.create(req.body)
    res.send({success : true});
})
routes.put("/:id", async(req, res)=>{
    await Hotels.updateMany({_id : req.params.id},req.body)
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Hotels.deleteMany({_id : req.params.id})
    res.send({success : true});
})



// localhost:080/api/destination/category/Wildlife



module.exports = routes;