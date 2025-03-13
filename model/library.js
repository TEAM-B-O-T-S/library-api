// import { required } from "joi";
import { Schema, model, modelNames } from "mongoose";
import normalize from "normalize-mongoose";

const librarySchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    genre: { type: String },
    status: { type: String },
    publishedYear: { type: Number, required: true },
    quantity: { type: Number },
  },
  {
    timestamps: true,
  }
);

librarySchema.plugin(normalize);
export const LibraryModel = model("Library", librarySchema);
