const express = require("express");
const app = express();
const port = 3000;
let no = 6;

app.use(express.json());

const cors = require("cors");
app.use(cors());

let todos = [
    { id: 1, text: "운동하기", isChk: true },
    { id: 2, text: "아침먹기", isChk: true },
    { id: 3, text: "학원가기", isChk: true },
    { id: 4, text: "점심먹기", isChk: false },
    { id: 5, text: "과제하기", isChk: false },
]

app.get("/todos", (req, res) => {
    res.send(todos);
})

app.listen(port, () => {
    console.log("서버 열림");
})

app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    todos = todos.filter(item => item.id !== Number(id));
    res.send(todos);
})
app.post("/todos", (req, res) => {
    const todo = {
        id: no++,
        text: req.body.text,
        isChk: false
    }
    todos.push(todo);
    res.send(todos);
})
app.put("/todos/:id", (req, res) => {
    const todo = todos.find(item => item.id === Number(req.params.id));

    if (todo) {
        todo.isChk = !todo.isChk;
    }
    console.log(todos);
    res.send(todos);
})