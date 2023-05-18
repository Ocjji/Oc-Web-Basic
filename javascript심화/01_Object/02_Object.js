const obj1 = {
    name: '김태리',
    age: 20,
    addr: '서울',
    tel: '010-1234-5555',
    go: function () {
        console.log(`${this.name}은 달린다`);
    }
}
console.log(obj1.name, obj1.age, obj1.addr, obj1.tel);
obj1.go();
console.log(obj1['name'], obj1['age'], obj1['addr'], obj1['tel']);

function getObj() {
    return {
        firstName: '혜교',
        lastName: '송',
        age: 25,
        addr: '서울',
        ['email']: 'aaaa@naver.com',
        ['tel']: '010-3333-4444'
    }
}
console.log(getObj());