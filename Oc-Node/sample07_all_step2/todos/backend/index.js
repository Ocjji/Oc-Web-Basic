const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const { data } = require("./models/todos");
const { getTodos, deleteTodos, postTodos, putTodos } = require("./controllers/todoController");

app.use(express.json())
app.use(cors())

app.get('/todos', getTodos);

//삭제
app.delete('/todos/:id', deleteTodos)

//post => req.body 
app.post('/todos', postTodos)

// 수정 put
app.put('/todos/:id', putTodos)


app.listen(port, () => {
    console.log(`서버실행 ${port}`)
})