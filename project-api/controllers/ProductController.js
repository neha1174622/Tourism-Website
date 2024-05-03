const routes = require("express").Router();
const Product = require("../models/Product")
const path = require("path");
const { UniqueString } = require("unique-string-generator")

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})

routes.get("/:id", async(req, res)=>{
    let result = await Product.find({_id : req.params.id});
    res.send(result[0]);
})


routes.post("/", async(req, res)=>{
  
    let unique_name = UniqueString(); // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
    let file = req.files.image; // 1.jpg
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];
    let new_name = unique_name+"."+ext;
    let upload_path = path.resolve()+"/assets/product/"+new_name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name;
        await Product.create(req.body)
        res.send({success : true});
    })

    
})




routes.put("/:id", async(req, res)=>{
    // console.log(req.body); return;
    if(req.files){
        let unique_name = UniqueString(); // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
    
        let file = req.files.image; // 1.jpg
        let arr = file.name.split(".");
        let ext = arr[arr.length-1];

        let new_name = unique_name+"."+ext;
        let upload_path = path.resolve()+"/assets/product/"+new_name;
        file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name;
        await Product.updateMany({_id : req.params.id},req.body)
        res.send({success : true});
    })
    }else{

        await Product.updateMany({_id : req.params.id},req.body)
        res.send({success : true});
    }
    })


routes.delete("/:id", async(req, res)=>{
    await Product.deleteMany({_id : req.params.id})
    res.send({success : true});
})
module.exports = routes;

