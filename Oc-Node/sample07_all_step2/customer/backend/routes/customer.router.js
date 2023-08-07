const express = require("express");
const { getCustomer, deleteCustomer, postCustomer, findCustomer, putCustomer } = require("../controllers/customController");
const customerRouter = express.Router();

customerRouter.get("/", getCustomer);
customerRouter.delete("/:id", deleteCustomer);
customerRouter.post("/", postCustomer);
customerRouter.post("/find/:id", findCustomer);
customerRouter.put("/update/:id", putCustomer);

module.exports = customerRouter;