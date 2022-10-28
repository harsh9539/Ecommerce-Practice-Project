import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import userRoute from './routes/user.js';
import authRoute from "./routes/auth.js"
import productRoute from "./routes/product.js"
import stripeRoute from './routes/stripe.js';
import cartRoute from "./routes/cart.js"
import orderRoute from "./routes/order.js"
import cors from 'cors'

const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGODB_URL).then(() => { console.log("DB connection successful") }).catch((err)=>console.log(err));


// API
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);
app.use("/api/carts",cartRoute);
app.use("/api/checkout",stripeRoute);

// PORT
app.listen(process.env.PORT || 8000, () => {
    console.log(`Backend server is running on port ${process.env.PORT}`);
})