const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());



app.post("/", (req, res) => { let a, data,outp; 
    a= req.body.data ;
    outp= a.slice(0,3)+a.slice(a.indexOf(":")); 
    console.log(outp);
    res.json({out:outp})}) 
app.listen(port, () => {console.log(`Server running on ${port}`)});