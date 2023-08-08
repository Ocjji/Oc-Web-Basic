const express = require('express');
const cors = require('cors');
const mallRouter = require("./routes/mall.router");
const userRouter = require("./routes/user.router");
const app = express()
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/mall", mallRouter);
app.use("/mall", userRouter);

app.listen(port, () => {
  console.log('서버 접속 완료')
})

