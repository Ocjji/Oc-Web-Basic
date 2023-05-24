/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log('동기형 - js 절차형');
console.log('절차형 : 위에서부터 하나씩 실행');
 */

/*
console.log('시작');
setTimeout(() => {
    console.log('3초 후 실행 - 중간실행');
}, 3000)
console.log('끝');
 */

/*
console.log('시작');
function make(callback) {
    setTimeout(() => {
        console.log('3초 후 실행 - 중간실행');
        callback()
    }, 3000)
}
make(function () { console.log('끝'); });
 */

// 1번실행, 2번실행, ... , 5번실행 ( 2초 단위 )
console.log('시작');
setTimeout(() => {
    console.log('1번 실행');
    setTimeout(() => {
        console.log('2번 실행');
        setTimeout(() => {
            console.log('3번 실행');
            setTimeout(() => {
                console.log('4번 실행');
                setTimeout(() => {
                    console.log('5번 실행');
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)

// make(function () { console.log('끝'); });

