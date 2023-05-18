// 목록구조
let obj1 = {
    name: '홍길동',
    age: 20,
    addr: '인천'
};
let obj2 = {
    name: '김태리',
    age: 24,
    addr: '서울'
};

const classObj = {
    list: [{
        name: '홍길동',
        age: 20,
        addr: '인천'
    }, {
        name: '김태리',
        age: 24,
        addr: '서울'
    }]
}

const classObj1 = {
    list: [obj1, obj2]
}

for (let i = 0; i < classObj.list.length; i++) {
    console.group(`${i + 1}그룹`);
    console.log(classObj['list'][i]['name']);
    console.log(classObj['list'][i]['age']);
    console.log(classObj['list'][i]['addr']);
    console.groupEnd();
}