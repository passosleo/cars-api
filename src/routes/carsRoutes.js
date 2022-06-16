import express from "express";
import CarsController from "../controllers/carsController.js";

const router = express.Router();

router
  .get("/cars", CarsController.getCars)
  .get("/cars/busca", CarsController.getCarByColor)
  .get("/cars/:id", CarsController.getCarById)
  .post("/cars", CarsController.registerCar)
  .put("/cars/:id", CarsController.updateCar)
  .delete("/cars/:id", CarsController.deleteCar);

export default router;
