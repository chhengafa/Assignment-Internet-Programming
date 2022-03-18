const router = require("express").Router();
const User = require('../models/user')
const { json } = require("body-parser");

router.get("/",(req,res)=>{
  res.send("hello");
});

router.post('/', async (req,res)=>{
 
  const {email,password} = req.query;

    try {
        const userFind = await User.findOne({
            email
        });
            if (password == userFind.password) {
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