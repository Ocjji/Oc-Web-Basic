const express = require("express");
const app = express();
const port = 3000;
const data = ["보라돌이", "뚜비", "나나", "뽀", "아가햇님"];

app.get("/", (req, res) => {
    res.send("환영합니다");
})
app.get("/data", (req, res) => {
    res.send(`<h2>${data}</h2>`);
})
/* 
    data/0 => 보라돌이
    data/1 => 뚜비
    ...
    data/??? => 해당값이 없습니다.
*/
app.get("/data/:id", (req, res) => {
    const id = req.params.id;
    if (id > data.length - 1) {
        res.send("해당값이 없습니다");
    }
    else {
        res.send(`data ${id} 출력값 : <h2>${data[id]}</h2>`);
    }
})
app.get("*", (req, res) => {
    res.send(`<h2>페이지를 찾을 수 없습니다</h2>`);
})

app.listen(port, () => {
    console.log("서버 실행중...");
})