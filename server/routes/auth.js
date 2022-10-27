import express from "express";
const router = express.Router();
import User from "../models/User.js"
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
    })
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err);
    }
})



//Login
router.post("/login",async (req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("User Does not exist");
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);

        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password && res.status(401).json("Wrong Password");

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        );
        
        const {password,...others} = user._doc;
        res.status(200).json({...others,accessToken});

    } catch (error) {
        res.status(500).json(error);
    }
})
export default router;