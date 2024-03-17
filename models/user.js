const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    password : {
        type : String,
        require : true
    },
    contact : {
        type:String,
        require : true
    },
    designation : {
        type : String,
        require : true
    },
    organization : {
        type : String,
        require : true
    },
    imageURL : {
        type:String,
        default : "default_image_url.jpg"
    }
}, {timestamps : true});

const User = mongoose.model("User", userSchema);




module.exports = User;