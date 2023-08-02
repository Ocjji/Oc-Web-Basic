const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("<h2>출력합니다</h2>");
})
app.get("/test", (request, response) => {
    response.send("<h2> test 화면 </h2>");
})
app.get("/1", (request, response) => {
    response.send("<h2> test1 화면1</h2>");
})
app.get("/test/:id", (request, response) => {
    const id = request.params.id;
    console.log(typeof id, "문자의 성격입니다");
    response.send(`test 출력 값은 : ${id}`);
})

app.listen(port, () => {
    console.log("서버 실행");
})