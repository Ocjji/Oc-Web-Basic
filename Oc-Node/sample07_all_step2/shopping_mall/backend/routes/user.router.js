const express = require("express");
const { joinDubot } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/join", joinDubot);

module.exports = userRouter;