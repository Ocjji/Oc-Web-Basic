const express = require("express");
const { getProducts } = require("../controllers/mallController");
const mallRouter = express.Router();

mallRouter.get("/", getProducts);

module.exports = mallRouter;