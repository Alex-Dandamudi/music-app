import express from "express";
import dotenv from "dotenv";
import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";

import { connectDB } from "./lib/db.js";


import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/songs.route.js";
import albumRoutes from "./routes/albums.route.js";
import statRoutes from "./routes/stats.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json()); //to parse req.body
app.use(clerkMiddleware()); // adds auth to every request => req.auth
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname,"tmp"),
    createParentPath:true,
    limits:{
        fileSize:10*1024*1024, //10mb max file size
    },
}))

app.use("/api/users",userRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/albums",albumRoutes);
app.use("/api/stats",statRoutes);

//error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message})
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});