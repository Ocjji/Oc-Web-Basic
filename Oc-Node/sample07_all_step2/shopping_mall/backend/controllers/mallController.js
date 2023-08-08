let dabase = require("../models/index.js");
const selSQL = "SELECT * FROM products";

const getProducts = (req, res) => {
    dabase.query(selSQL, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}
module.exports = {
    getProducts,
}