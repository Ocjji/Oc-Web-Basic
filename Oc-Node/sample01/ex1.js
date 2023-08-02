const add = (x, y) => {
    return x + y;
}
const sub = (x, y) => {
    return x - y;
}
const mul = (x, y) => {
    return x * y;
}
const div = (x, y) => {
    return x / y;
}
const num1 = 10;

// commonJS 방식
module.exports = {
    add: add,
    sub,
    mul,
    div,
    num1
}