const mongoose = require('mongoose');
module.exports = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/exercise01',{
            autoIndex:true,
            serverSelectionTimeoutMS:30000
        });
        console.log("Mongoose connected");
    }
    catch(err){
        console.log("Mongoose: ",err);
    }
}