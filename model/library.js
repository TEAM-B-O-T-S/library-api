import { Schema, model, modelNames } from "mongoose";

const librarySchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String },
    status: { type: String },
    publishedYear: { type: Number, required: true },
    quantity: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const LibraryModel = model("Library", librarySchema);
