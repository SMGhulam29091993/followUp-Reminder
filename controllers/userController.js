const User = require("../models/user");
const bcryptjs = require("bcryptjs");


module.exports.register = async (req,res,next)=>{
    const {password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    try {
        const existingUser = await User.findOne({email : req.body.email});
        if(existingUser){
            res.status(201).send({message : "User already exists!!", success: true})
            return;
        }
        const user = await User.create({
            name: req.body.name,
            email : req.body.email,
            password : hashedPassword,
            contact : req.body.contact,
            designation : req.body.designation,
            organization : req.body.organization
        });
        res.status(200).send({
            message : "User Registered Successfully !!",
            success : true
        })
    } catch (error) {
        next(error);
    }
}