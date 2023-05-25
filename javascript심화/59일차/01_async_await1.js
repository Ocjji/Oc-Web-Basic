const test = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1번 실행');
            resolve('성공');
        }, 2000);
    })
}

const test1 = () => console.log('2번 실행');
console.log('시작');
// test().then(() => test1());

const make = async () => {
    await test();
    test1();
}
make();

/* 
    1. async : function 앞에 붙음
        const func1 = async() => {} : 화살표 함수에서 이와 같이 사용
    2. async 안에 반드시 포함 await
        const func1 = async() => {
            await
        }

        async : Promise 기반
        await : .then() 기반
    
*/