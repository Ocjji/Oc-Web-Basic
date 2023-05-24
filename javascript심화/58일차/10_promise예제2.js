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


// 2. 두번째 방식
console.log('음료 주문하기 실행');
// menu1().then(res => console.log(res));
menu1().then(res => menu2(res))
    .then(res => menu3(res))
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => {
        console.log('전체 주문완료');
    });