import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import signupAdsRoutes from './routes/SignupAds.routes.js';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))
app.use(express.json(
    {
        limit: "16kb"
    }
));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public"));
app.use(cookieParser());

// Create uploads directory if it doesn't exist
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '../uploads/ads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}



// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Import and use SignupAds routes
app.use('/api/signup-ads', signupAdsRoutes);

app.get("/", (req, res) => {
    res.send("Api is running on route");
});



export default app;
