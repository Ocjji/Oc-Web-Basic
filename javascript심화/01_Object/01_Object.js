const obj = {
    // key : value
    // 숫자, boolean, null, undefined는 따옴표 작성하지 않는다
    no: 1001,
    grade: 1,
    name: '홍길동',
    tel: '010-1234-5678'
}

// 출력 방법1) 객체.속성 , 객체.키
// 출력 방법2) 객체['속성'}, 객체['키']

console.group('출력 형식1');
console.log('학번 : ' + obj.no);
console.log('학년 : ' + obj.grade);
console.log('이름 : ' + obj.name);
console.log('전화 : ' + obj.tel);
console.groupEnd();

console.group('출력 형식2');
console.log('학번 : ' + obj['no']);
console.log('학년 : ' + obj['grade']);
console.log('이름 : ' + obj['name']);
console.log('전화 : ' + obj['tel']);
console.groupEnd();