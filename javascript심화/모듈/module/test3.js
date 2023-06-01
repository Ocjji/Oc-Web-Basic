// 유형3

const num = 200;
const make1 =()=>{
    return 300;
}
const make2 = (x,y)=>{
    return x+y;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
const obj = {
    name:"김삿갓",
    age : 30,
    addr : "인천"
}
const arr = [10,20,30,40];
// 변수, 함수, 객체, 클래스 ( 하나로 내보내기 )
export {num,make1,make2,Person,obj,arr};

// export default 는 하나의 js에서 하나만 존재한다
export default make1;