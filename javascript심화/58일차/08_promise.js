/* 
Promise
Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.


다음 중 하나의 상태를 가진다.

대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
이행(fulfilled): 연산이 성공적으로 완료됨.
거부(rejected): 연산이 실패함.

Promise : 약속을 반환
데이터가 들어오기 전에 기다릴게 / 약속할게

1. 데이터 불러오기
2. 서버에서 데이터가 들어오기 전에 데이터 실행됨
3. 서버로부터 데이터가 들어옴

x = 1;
y = callServerDate() - 서버 호출에서 데이터 받아오기
z = x + y : 결과

*/

const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('데이터 성공');  // 와! 문제 없음!
        // reject('데이터 실패');
    }, 3000)
})
test.then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log(error);
    }
)
