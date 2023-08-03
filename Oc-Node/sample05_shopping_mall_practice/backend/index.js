const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;
app.use(express.json());
app.use(cors());

let data = require("./api/data.js");

app.get("/shop", (req, res) => {
  res.send(data);
})


app.listen(port, () => {
  console.log(data);
  console.log('서버 접속 완료')
})

