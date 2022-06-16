import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const brands = mongoose.model("brands", brandSchema);

export default brands;
