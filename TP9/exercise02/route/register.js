const router = require("express").Router();
const User = require('../models/user')
const { json } = require("body-parser");
const { Validation } = require('../middleware/vadilation');
const { registerSchema } = require('../Schema');

router.get("/",(req,res)=>{
  res.send("bello");
});

router.post('/',Validation(registerSchema), async (req,res)=>{
  const {email,username,firstname,lastname,password} = req.query;
  var bcrypt = require('bcryptjs');
  var salt = bcrypt.genSaltSync(10);

 
  var hash = bcrypt.hashSync( password, salt);
  
  const existed = await User.findOne({email});
  if(existed){
    res.json({"success":false,"massage":"Register already existed"});
  }
  else{
    const newUser={
      "email": email,
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "password": hash
    }
    const createUser = await User.create(newUser);
    res.json({"success":true,"massage":"Register successful"});
  }

      
    }
  
);



module.exports = router;