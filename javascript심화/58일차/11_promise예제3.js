// ~.then : promise 원리

const menu1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('1 : 아메리카노 주문완료');
            resolve('1 : 아메리카노 주문완료');
        }, 2000);
    });
}
const menu2 = (msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('1 : 아메리카노 주문완료');
            resolve('2 : 카페라떼 주문완료');
        }, 2000);
    });
}
const menu3 = (msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('1 : 아메리카노 주문완료');
            resolve('3 : 바닐라라떼 주문완료');
        }, 2000);
    });
}


// 3. 세번째 방식 Promise.all()
console.log('음료 주문하기 실행');
console.time('시작');
Promise.all([menu1(), menu2(), menu3()])
    .then(res => {
        console.log(res);
        console.timeEnd('시작');
    });
console.log('전체 주문완료');
