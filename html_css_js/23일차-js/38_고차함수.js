'use strict';

function increment() {
    let x = 0;
    return function () {
        console.log(x++);
    };
}

let count = increment();
/* let count = function () {
        console.log(x++);
    } */
console.log(count);

count();
count();
count();
count();


const decrement = (x = 10) => {
    return function () {
        return x--;
    };
}

let num = decrement();

for (let i = 0; i < 10; i++) {
    console.log(num());
}



