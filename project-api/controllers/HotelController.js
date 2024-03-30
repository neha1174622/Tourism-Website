const routes = require("express").Router();
const Hotel = require("../models/Hotel")



// localhost:8080/api/hotel --> RESTful API -->CRUD
// return all data --> Read
routes.get("/", async(req, res)=>{
    let result = await Hotel.find();
    res.send(result);
})
// return perticular data --> Read
routes.get("/:id", async(req, res)=>{
    let result = await Hotel.find({_id : req.params.id});
    res.send(result[0]);
})

// create
routes.post("/", async(req, res)=>{
    await Hotel.create(req.body)
    res.send({success : true});
})
//Update
routes.put("/:id", async(req, res)=>{
    await Hotel.updateMany({_id : req.params.id},req.body)
    res.send({success : true});
})
//Delete
routes.delete("/:id", async(req, res)=>{
    await Hotel.deleteMany({_id : req.params.id})
    res.send({success : true});
})







module.exports = routes;