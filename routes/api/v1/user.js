const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/userController.js");

router.get("/test", (req,res)=>{
    res.status(200).send({message:"The backend is working fine!!"})
});
router.post("/register", userController.register);


module.exports = router;