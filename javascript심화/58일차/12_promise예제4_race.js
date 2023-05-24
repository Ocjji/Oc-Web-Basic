// ~.then : promise 원리
/* 
Promise.race() 메소드는 Promise 객체를 반환합니다. 이 프로미스 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.
 */
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
Promise.race([menu1(), menu2(), menu3()])
    .then(res => {
        console.log(res);
        console.timeEnd('시작');
    });
console.log('전체 주문완료');
