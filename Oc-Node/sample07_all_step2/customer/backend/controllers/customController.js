let dabase = require("../models/index.js");
const selSQL = `SELECT * FROM customer`;

const getCustomer = (req, res) => {
    const sql = `SELECT * FROM customer`;
    dabase.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
}
const deleteCustomer = (req, res) => {
    const sql = `DELETE FROM customer where id = ${req.params.id}`;
    dabase.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // getCustomer(req, res);
            dabase.query(selSQL, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            })
        }
    })
}
const postCustomer = (req, res) => {
    const { name, addr } = req.body;
    const sql = `INSERT INTO customer (name, addr) values ("${name}","${addr}")`;
    dabase.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            dabase.query(selSQL, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            })
        }
    })
}
const findCustomer = (req, res) => {
    const sql = `SELECT * FROM customer WHERE id = ${req.params.id}`;
    dabase.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    })
}
const putCustomer = (req, res) => {
    const id = Number(req.params.id);
    const { name, addr } = req.body;
    const sql = `UPDATE customer SET name="${name}", addr="${addr}" WHERE id=${id}`;
    dabase.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            dabase.query(selSQL, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            })
        }
    })
}

module.exports = {
    getCustomer,
    deleteCustomer,
    postCustomer,
    findCustomer,
    putCustomer
}