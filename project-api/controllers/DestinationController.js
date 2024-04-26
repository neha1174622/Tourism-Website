const routes = require("express").Router();
const Destination = require("../models/Destination")
const path = require("path");
const { UniqueString } = require("unique-string-generator")

// localhost:8080/api/destination/category/Wildlife

routes.get("/category/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})


// localhost:8080/api/destination   -- ReST API
/*  
    let result = await axios.get(localhost:8080/api/destination)
    let result = await axios.get(localhost:8080/api/destination/101)
    let result = await axios.post(localhost:8080/api/destination/, obj)
    let result = await axios.put(localhost:8080/api/destination/101, obj)
    let result = await axios.delete(localhost:8080/api/destination/101)
*/



// return all data
routes.get("/", async(req, res)=>{
    let result = await Destination.find();
    res.send(result);
})
// return perticular data
routes.get("/:id", async(req, res)=>{
    let result = await Destination.find({_id : req.params.id});
    res.send(result[0]);
})

// for axios.post to store data in database
routes.post("/", async(req, res)=>{
    // console.log(req.body);
    // console.log(req.files);
    // ----code to assign unique name to image in assests/destination-images but same extension as uploaded
    let unique_name = UniqueString(); // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
    
    let file = req.files.image; // image is same as append wali image of front // file will have image whole data
    // to extract extension from image we will use split function of array with separator is . (dot)
    //as extension will be at last index of array threfore its index will be array ki length- 1
    let arr = file.name.split("."); 
    let ext = arr[arr.length-1]; 

    let new_name = unique_name+"."+ext; //this will be the name of image is assests/destination-images

// data will be stored on server i.e assests for while rest of all  data on database
    let upload_path = path.resolve()+"/assets/destination-images/"+new_name; //to save image in assests/destination-images using .mv i.e move property of files
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name; //storing image name in req.body
        await Destination.create(req.body) //storing data on destination collection 
        res.send({success : true}); 
    })

    
})



// for update
routes.put("/:id", async(req, res)=>{
    // console.log(req.body); return;
    if(req.files){ // if file is selected for update along with text
        //code to change name of newly uploaded image file
        let unique_name = UniqueString(); // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
    
        let file = req.files.image; // 1.jpg
        let arr = file.name.split(".");
        let ext = arr[arr.length-1]; 

        let new_name = unique_name+"."+ext;
        let upload_path = path.resolve()+"/assets/destination-images/"+new_name;
        file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name;
        await Destination.updateMany({_id : req.params.id},req.body)
        res.send({success : true});
    })
    }else{ // if file is not selected for update only text

        await Destination.updateMany({_id : req.params.id},req.body)
        res.send({success : true});
    }
    })

// for delete function
    routes.delete("/:id", async(req, res)=>{
    await Destination.deleteMany({_id : req.params.id})
    res.send({success : true});
})



// localhost:080/api/destination/category/Wildlife



module.exports = routes;

/*
    flipkart.com/api/product        this is a Api (.get)



    Express (node)
    1. express
    2. mongoose
    3. cors
    4. sha1
    5. express-fileupload
    6. jsonwebtoken
    7. unique-string-generator


    React
    1. react-router-dom
    2. axios
    3. formik
    4. yup




    let a = "hello.logo.jpg";
    
    let data = a.split("."); [hello, logo, jpg]
    let ext = data[data.length-1];
*/
