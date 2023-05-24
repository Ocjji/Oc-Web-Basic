// try...catch

// try...catch 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정합니다.

const abc = () => {
    console.log('OK 실행');
}
try {
    // 실행
    ab();
} catch (error) {
    // 에러발생
    console.log(error);
    console.log();
    console.log(error.name);
    console.log(error.message);
    console.log('에러발생');
}