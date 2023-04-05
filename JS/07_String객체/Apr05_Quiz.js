'use strict';



let getPW = '';
let max_length = 8;
let convertPW = '';

getPW = prompt('비밀번호를 입력하세요.(1 ~ 8자리)');


let make = (password) => {
    let temp = 0;
    temp = max_length - password.length;

    let result = '';
    for (let i = temp; i > 0; i--) {
        result += String(i);
    }
    return result + password;
}

convertPW = make(getPW);

document.write(`${convertPW}`);