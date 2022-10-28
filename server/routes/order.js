import express from "express";
import Order from "../models/Order.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./VerifyToken.js";

const router = express.Router();

// CREATE Order

router.post("/",verifyToken,async (req,res)=>{
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})




// UPDATE Order

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted .... ");
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get user Order
router.get("/find/:userId",verifyTokenAndAuthorization ,async (req, res) => {
    try {
        const order = await Order.find({userId:req.params.userId});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get all
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})


// GET MONTHLY INCOME
router.get("/income",verifyTokenAndAdmin,async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try {
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                }
            }
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
})



export default router;