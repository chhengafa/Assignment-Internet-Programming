const router = require("express").Router();
const User = require('../models/user')
const { json } = require("body-parser");

router.get("/",(req,res)=>{
  res.send("bello");
});

router.post('/', async (req,res)=>{
 
  const {email,username,firstname,lastname,password} = req.query;
  const existed = await User.findOne({email});
  if(existed){
    res.json({"success":false,"massage":"Register already existed"});
  }
  else{
    const newUser={
      email,
      username,
      firstname,
      lastname,
      password
    }
    const createUser = await User.create(newUser);
    res.json({"success":true,"massage":"Register successful"});
  }

      
    }
  
);



module.exports = router;