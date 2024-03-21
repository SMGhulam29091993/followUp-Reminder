const mongoose = require("mongoose");
const User = require("./user.js");

const followupSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    designation : {type : String, require : true},
    organization : {type : String, require : true},
    content : {
        type : String,
        require : true
    },
    date : {
        type : String,
        require : true
    },
    time : {
        type : String,
        require : true
    }
}, {timestamps : true});

const FollowUp = mongoose.model("FollowUp", followupSchema);

module.exports = FollowUp;