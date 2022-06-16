import express from "express";
import cars from "./carsRoutes.js";
import brands from "./brandsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Curso de Node");
  });

  app.use(express.json(), cars);
  app.use(express.json(), brands);
};

export default routes;
