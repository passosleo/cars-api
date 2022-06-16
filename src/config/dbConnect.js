import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:123@cars-app.bz7mrzr.mongodb.net/cars-db"
);

const db = mongoose.connection;

export default db;
