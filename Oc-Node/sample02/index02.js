const express = require("express");
const app = express();
const port = 3000; // 사용자 지정

app.get("/", (req, res) => {
    res.send("테스트 화면 결과입니다");
})

app.listen(port, () => {
    console.log(`서버가 실행중 port : ${port}`);
})