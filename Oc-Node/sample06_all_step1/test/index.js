const express = require("express");
const cors = require("cors");
const { getTest, getTestNum, deleteTest, postTest, putTest, patchTest } = require("./controllers/testController");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/test", getTest);
app.get("/test/:id", getTestNum);
app.delete("/test/:num", deleteTest);
app.post("/test", postTest);
app.put("/test/:id", putTest);
app.patch("/test/:id", patchTest);

app.listen(port, () => {
    console.log(port, "서버 실행");
})