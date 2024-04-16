const routes = require("express").Router();
const Destination = require("../models/Destination")
const path = require("path");


 //  localhost:080/api/destination/category/Wildlife --> it is not part of RESTAPI
routes.get("/category/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})


// localhost:8080/api/destination --> RESTful API -->CRUD
// return all data --> Read
routes.get("/", async(req, res)=>{
    let result = await Destination.find();
    res.send(result);
})
// return particular data --> Read
routes.get("/:id", async(req, res)=>{
    let result = await Destination.find({_id : req.params.id});
    res.send(result[0]);
})




// create
routes.post("/", async(req, res)=>{
    // console.log(req.body);
    // console.log(req.files);
    let file = req.files.image;
    let upload_path = path.resolve()+"/assets/destination-images/"+file.name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = file.name;
        await Destination.create(req.body)
        res.send({success : true});
    })

    
})

//Update
routes.put("/:id", async(req, res)=>{
    await Destination.updateMany({_id : req.params.id},req.body)
    res.send({success : true});
})

//Delete
routes.delete("/:id", async(req, res)=>{
    await Destination.deleteMany({_id : req.params.id})
    res.send({success : true});
})







module.exports = routes;