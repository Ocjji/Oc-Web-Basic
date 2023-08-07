let dabase = require("../models/");
let no = 6;
let data = [];
const getTodos = (req, res) => {
    const sql = `select * from todos`;
    dabase.query(sql, (error, result) => {
        // db.query(쿼리형식, [전달값, 전달값] ,(에러형식, 쿼리결과) => {   })
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
    // res.send(data)
}
const deleteTodos = (req, res) => {
    const delsql = `delete from todos where id = ?`;
    dabase.query(delsql, [req.params.id], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // const sql = `select * from todos`;
            // dabase.query(sql, (error, result) => {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         res.send(result);
            //     }
            // });
            res.send(result);
        }
    });
}
const postTodos = (req, res) => {
    console.log(req.body.text);
    const text = req.body.text;
    const isChk = false;

    const postsql = `insert into todos (text, isChk) values (?,?)`;
    dabase.query(postsql, [text, isChk], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
    // const todo = {
    //     id: no++,
    //     text: req.body.text,
    //     isChk: false
    // }
    // data.push(todo)
    // res.send(data)
}
const putTodos = (req, res) => {
    const { id } = req.params;
    const isChk = req.body.isChk;
    const updsql = `UPDATE todos SET isChk = ? where id = ?`;
    dabase.query(updsql, [isChk, id], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // const sql = `select * from todos`;
            // dabase.query(sql, (error, result) => {
            //     // db.query(쿼리형식, [전달값, 전달값] ,(에러형식, 쿼리결과) => {   })
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         res.send(result);
            //     }
            // });
            res.send(result);
        }
    })

    // const todo = data.find(item => item.id === Number(req.params.id))
    // if (todo) {
    //     todo.isChk = !todo.isChk
    // }
    // res.send(data)
}
module.exports = {
    data,
    getTodos,
    deleteTodos,
    postTodos,
    putTodos,
}