import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import userRoute from './routes/user.js';


const app = express();
dotenv.config();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// MongoDB connection
mongoose.connect(process.env.MONGODB_URL).then(() => { console.log("DB connection successful") }).catch((err)=>console.log(err));


// API
app.use("/api/users",userRoute)

// PORT
app.listen(process.env.PORT || 8000, () => {
    console.log(`Backend server is running on port ${process.env.PORT}`);
})