import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  marca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brands",
    required: true,
  },
  ano: { type: Number, required: true },
  cor: { type: String, required: true },
  porte: { type: String, required: true },
  portas: { type: Number, required: true },
  lugares: { type: Number, required: true },
  cambio: { type: String, required: true },
  combustivel: { type: String, required: true },
  potencia: { type: String, required: true },
  torque: { type: String, required: true },
  preco: { type: Number, required: true },
});

const cars = mongoose.model("cars", carSchema);

export default cars;
