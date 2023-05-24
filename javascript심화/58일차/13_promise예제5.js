const menu = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('메뉴 주문 성공');
        reject('메뉴 주문 실패');
    }, 2000);
});

console.log('시작');
menu.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('마침');
})
