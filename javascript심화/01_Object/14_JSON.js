let data = [
    {
        "firstName": "길동",
        "lastName": "홍",
        "age": 20
    },
    {
        "firstName": "재석",
        "lastName": "유",
        "age": 25
    }
]

let result = '';
/* 
    JSON.stringify()
    웹페이지에서 서버로 보낼때 데이터를 문자열로 변환해서 보냄

    JSON.parse()
    서버에서 문자열로 받은 데이터를 Object 형식으로 변환
*/

result = JSON.stringify(data, null, 4);
console.log(result);
console.log(data);

let obj = JSON.parse(result);
console.log(obj);

