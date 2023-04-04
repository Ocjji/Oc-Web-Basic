// console
// 메세지 출력, 중간값 체크, 에러 체크
console.log('안녕하세요');

console.group('메세지1');
    console.log('안녕하세요');
    console.log('안녕하세요');
    console.log('안녕하세요');
console.groupEnd();

console.log();
// 자동 개행식으로 비어있는 공간이 들어감
console.group('메세지2');
    console.log('안녕하세요');
    console.log('안녕하세요');
    console.log('안녕하세요');
console.groupEnd();