const express = require("express");
const { getTest, getTestNum, deleteTest, postTest, putTest, patchTest } = require("../controllers/testController");
const testRouter = express.Router();

testRouter.get("/", getTest);
testRouter.get("/:id", getTestNum);
testRouter.delete("/:id", deleteTest);
testRouter.post("/", postTest);
testRouter.put("/:id", putTest);
testRouter.patch("/:id", patchTest);

module.exports = testRouter;