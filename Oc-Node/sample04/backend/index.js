const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("서버 활성화");
})

app.listen(port, () => {
    console.log("서버실행");
})