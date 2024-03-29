const routes = require("express").Router();
const City = require("../models/City");


// localhost:8080/api/city/state

routes.get("/state", async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

// localhost:8080/api/city/getcitybystate/Gujarat

routes.get("/getcitybystate/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await City.find({ state : x });
    res.send(result);
})


module.exports = routes;

/*
    res.sendFile ---- send HTML file
    res.render ---- ejs+data
    res.redirect ---- redirect

    res.send(data);
*/