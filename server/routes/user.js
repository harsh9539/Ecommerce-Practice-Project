import express  from "express";
import User from "../models/User.js";
import {verifyToken, verifyTokenAndAuthorization} from "./VerifyToken.js";

const router = express.Router();

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true}
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err)
    }
})


export default router;