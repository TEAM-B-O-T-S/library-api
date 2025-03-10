import express from 'express';
const port = process.env.port || 3000;
import "dotenv/config";
import mongoose from "mongoose";
import libraryRouter from './routes/library.js';


// Make database connection
await mongoose.connect(process.env.MONGO_URI);


//Create an express app
const app = express();

// Use global middlewares
app.use(express.json());

app.use(libraryRouter);


// Listen for incoming request
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});