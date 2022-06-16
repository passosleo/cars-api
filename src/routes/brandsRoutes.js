import express from "express";
import BrandsController from "../controllers/brandsController.js";

const router = express.Router();

router
  .get("/brands", BrandsController.getBrands)
  .get("/brands/:id", BrandsController.getBrandById)
  .post("/brands", BrandsController.registerBrand)
  .put("/brands/:id", BrandsController.updateBrand)
  .delete("/brands/:id", BrandsController.deleteBrand);

export default router;
