import express from "express";
import Cart from "../models/Cart.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./VerifyToken.js";

const router = express.Router();

// CREATE CART

router.post("/",verifyToken,async (req,res)=>{
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})




// UPDATE CART

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted .... ");
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get user cart
router.get("/find/:userId",verifyTokenAndAuthorization ,async (req, res) => {
    try {
        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get all
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find({});
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;