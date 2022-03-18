const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    firsttname:{
        type: String,
       
    },
    lastname:{
        type: String,
        
    },
    password:{
        type: String,
        required: true
    },

});

var User = mongoose.model('User',userSchema);
module.exports= User;