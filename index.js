import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import libraryRouter from "./routes/library.js";
import cors from "cors";

// Make database connection
await mongoose.connect(process.env.MONGO_URI);

//Create an express app
const app = express();

// Use global middlewares
app.use(express.json());
app.use(cors);
app.use(libraryRouter);

// Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
