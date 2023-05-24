// ~.then : promise 원리

const menu1 = (callback) => {
    setTimeout(() => {
        console.log('1 : 아메리카노 주문완료');
        callback();
    }, 2000)
}
const menu2 = (callback) => {
    setTimeout(() => {
        console.log('2 : 카페라떼 주문완료');
        callback();
    }, 2000)
}
const menu3 = (callback) => {
    setTimeout(() => {
        console.log('3 : 바닐라라떼 주문완료');
        callback();
    }, 2000)
}

// 1. 첫번째 방식
console.log('음료 주문하기 실행');
menu1(function () {
    menu2(function () {
        menu3(function () {
            console.log('전체 주문완료');
        });
    });
});
