const express = require("express");
const app = express();
const login = require("./route/login");
const register = require("./route/register");
const bodyParser = require("body-parser");
const cors = require("cors");
require('./configs/db')();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*'
}));
app.use('/register', register);
app.use('/login', login);
app.get('/',(req,res)=>{
    res.send("Hi");
  })
app.listen(3001,()=>{console.log("server start");})