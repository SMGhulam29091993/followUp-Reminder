const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/userController.js");

router.get("/test", (req,res)=>{
    res.status(200).send({message:"The backend is working fine!!"})
});
router.post("/register", userController.register);
router.post("/sign-in", userController.create_session);
router.get("/sign-out", userController.destroySession);


module.exports = router;