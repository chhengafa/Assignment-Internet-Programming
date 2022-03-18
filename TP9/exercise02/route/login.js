const router = require("express").Router();
const User = require('../models/user')
const { json } = require("body-parser");
const { Validation } = require('../middleware/vadilation');
const { loginSchema } = require('../Schema');
const bcrypt = require('bcrypt');
router.get("/",(req,res)=>{
  res.send("hello");
});

router.post('/', Validation(loginSchema), async (req,res)=>{
 
  const {email,password} = req.query;

    try {
        const userFind = await User.findOne({
            email
        });
            if (bcrypt.compareSync(password, userFind.password)) {
                res.json({ "success": true, "message": "Log in successful", "data": userFind });
            } else {
                res.json({ "success": false, "message": "Password is incorrect" });
            }
        
    } catch (error) {
        res.json( { "success": false, "message": "User not found!" });
    }
     
  }
  
);

module.exports = router;