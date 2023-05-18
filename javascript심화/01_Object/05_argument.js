// 화살표함수 안에 arguments 사용불가
function make1(name) {
    // console.log(name);

    /* console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); */

    /* for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    } */

    /* let arr = Array.from(arguments);
    arr.forEach(item => {
        console.log(item);
    }) */

    let arr = [...arguments];
    arr.forEach(item => {
        console.log(item);
    })
}

make1('홍길동', '전지현', '송혜교');