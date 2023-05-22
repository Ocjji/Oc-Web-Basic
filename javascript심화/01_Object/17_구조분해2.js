
const obj = {
    name: "김다미",
    age: 20,
    addr: "서울"
}

/* const { name, age, addr } = {
    name: "김다미",
    age: 20,
    addr: "서울"
} */

// 실제 작업에서는 아래와 같다
const { name, age, addr } = obj;

console.log(name, age, addr);

let obj1 = {
    na: "홍길동",
    ag: 25,
    birth: {
        year: 2000,
        month: 5,
        day: 5
    },
    address: {
        city: {
            cityName: "인천",
            ward: {
                wardName: "구월동"
            }
        }
    }
}

console.log(obj1["address"]["city"]["cityName"]);
console.log(obj1["address"]["city"]["ward"]["wardName"]);

let {
    na,
    ag,
    birth: {
        year,
        month,
        day
    },
    address: {
        city: {
            cityName,
            ward: {
                wardName
            }
        }
    }
} = obj1;

console.log(na, ag);
// 객체에 키와 값이 동일할 경우 키만 작성한다
let output = {
    na, ag, year, month, day, cityName, wardName
};
console.log(output);