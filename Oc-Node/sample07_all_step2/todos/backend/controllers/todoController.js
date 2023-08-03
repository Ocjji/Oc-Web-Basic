let { data } = require("../models/todos.js");
let no = 6;

const getTodos = (req, res) => {
    res.send(data)
}
const deleteTodos = (req, res) => {
    data = data.filter(item => item.id !== Number(req.params.id))
    res.send(data)
}
const postTodos = (req, res) => {
    console.log(req.body.text)

    const todo = {
        id: no++,
        text: req.body.text,
        isChk: false
    }
    data.push(todo)
    res.send(data)
}
const putTodos = (req, res) => {
    const todo = data.find(item => item.id === Number(req.params.id))
    if (todo) {
        todo.isChk = !todo.isChk
    }
    res.send(data)
}
module.exports = {
    data,
    getTodos,
    deleteTodos,
    postTodos,
    putTodos,
}