let com = {
    name: '(주)이젠',
    since: 2013,
    depart: ['총무', '재무', '인사', '구매']
}
// 복합구조
// 접근방식 

console.log(com.name);
console.log(com['since']);
console.log(com.depart[0]);
console.log(com.depart[1]);
console.log(com['depart'][2]);
console.log(com['depart'][3]);