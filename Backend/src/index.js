import mongoose from "mongoose";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
    path: "./.env"
});

connectDB().then(() => {
    app.listen(process.env.PORT||8080, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    

}).catch((error) => {
    console.error("ERROR: Could not connect to the database ", error)
    process.exit(1)
});

