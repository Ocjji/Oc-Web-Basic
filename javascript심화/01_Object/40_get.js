// getter
class Make {
    constructor(arr = []) {
        this.arr = arr;
        // this.nums = 값;
    }
    // this.nums의 필드명
    get nums() {
        return this.arr.length ? 'OK' : null;
    }
    set nums(value) {
        this.arr = [value, ...this.arr];
    }
}

const make = new Make([10, 20]);
// const make = new Make();
console.log(make.nums);
const make1 = new Make();
console.log(make1.nums);

make.nums = 500;
console.log(make.nums);
console.log(make.arr);