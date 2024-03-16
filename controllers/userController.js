const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const cookie = require('cookie');
const jwt = require("jsonwebtoken");

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
};

module.exports.create_session = async (req,res,next)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({message : "User not found!!", success : false})
        }
        const isPassword = bcryptjs.compareSync(password, user.password);
        if(!isPassword){
            return res.status(401).send({message : "Invalid username/password", success : false});
        }
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
        const {password : pass, ...rest} = user._doc;
        res.cookie('jwtToken', token, {httpOnly : true});
        res.status(200).send({messsge :"User logged in", success : true, user : rest, token });

    } catch (error) {
        next(error)
    }
};

module.exports.destroySession = (req, res, next) => {
    try {
        res.clearCookie('jwtToken'); // Clear the cookie named 'jwtToken'
        res.status(200).send({ message: "User signed out !!", success: true, user: null });
    } catch (error) {
        next(error);
    }
};

module.exports.updateUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        // Check if the request body contains a password field
        if (req.body.password) {
            // Hash the password before updating
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Update the user details
        const updateUser = await User.findByIdAndUpdate(userId, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                designation: req.body.designation,
                contact: req.body.contact,
                organization: req.body.organization
            }
        }, { new: true });

        // Check if the user was found and updated
        if (!updateUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Exclude password field from the response
        const { password: pass, ...rest } = updateUser._doc;

        // Send response with updated user details
        return res.status(200).json({ message: "User details updated", success: true, user: rest });
    } catch (error) {
        next(error);
    }
};
