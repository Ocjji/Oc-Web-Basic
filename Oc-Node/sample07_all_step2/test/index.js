const express = require("express");
const cors = require("cors");
const testRouter = require("./routes/testRouter.js");
// const { getTest, getTestNum, deleteTest, postTest, putTest, patchTest } = require("./controllers/testController");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/test", testRouter);
// app.get("/test/:id", getTestNum);
// app.delete("/test/:num", deleteTest);
// app.post("/test", postTest);
// app.put("/test/:id", putTest);
// app.patch("/test/:id", patchTest);

app.listen(port, () => {
    console.log(port, "서버 실행");
})