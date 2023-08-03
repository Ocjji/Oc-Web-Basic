let { data } = require("../models/test.js");

let no = data.length + 1;

// get 
const getTest = (req, res) => {
    res.send(data);
}
const getTestNum = (req, res) => {
    const num = Number(req.params.id);
    const item = data.find(item => item.id === num);
    res.send(item);
}
const deleteTest = (req, res) => {
    const num = Number(req.params.num);
    data = data.filter(item => item.num !== num);
    res.send(data);
}
const postTest = (req, res) => {
    //req.body.키
    const item = {
        id: no++,
        name: req.body.name,
        text: req.body.text,
        isChk: false
    }
    data.push(item);
    res.send(data);
}
const putTest = (req, res) => {
    const num = Number(req.params.id);
    const item = data.find(item => item.id === num);
    if (item) {
        item.isChk = !item.isChk;
    }
    res.send(item);
}
const patchTest = (req, res) => {
    const num = Number(req.params.id);
    const item = data.find(item => item.id === num);
    if (item) {
        item.isChk = !item.isChk;
    }
    res.send(item);
}

module.exports = {
    getTest,
    getTestNum,
    deleteTest,
    postTest,
    putTest,
    patchTest
}