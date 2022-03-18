const router = require("express").Router();
const User = require('../models/user')
const { json } = require("body-parser");
const bcrypt = require('bcrypt');
const { Validation } = require('../middleware/vadilation');
const { loginSchema } = require('../Schema');
const jwt = require('jsonwebtoken');
const { find } = require('../middleware/find');
const { check } = require('../middleware/check');
router.get("/",(req,res)=>{
  res.send("hello");
});

router.post('/',find("sign in"), Validation(loginSchema), async (req,res)=>{
  const {email,password} = req.query;
    try {
        const userFind = await User.findOne({
            email
        });
            if (bcrypt.compareSync(password, userFind.password)) {
              const token = jwt.sign({ email }, "moewmoew", { expiresIn: '2h' });
              //add token(cookie)
              return res.status(200).cookie("access_token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
              }).json({ status: "true", message: "Log in successful", data: userFind });
            } else {
              res.json({ "success": false, "message": "Password is incorrect" });
            }
        
    } catch (error) {
        res.json( { "success": false, "message": "User not found!" });
    }
     
  } 
);

router.post('/logout', check("Sign out"), async(req, res, next) => {
  //delete Cookie
  res.status(200).clearCookie('access_token').json({ status: "True", message: "Log out successful" })
})

module.exports = router;