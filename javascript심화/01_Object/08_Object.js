let obj = {
    center: {
        x: 10,
        y: 20
    },
    radius: 5.40
}
console.log(obj.center.x, obj.center.y, obj.radius.toFixed(2));

// 계층구조
let centerObj = {
    x: 10,
    y: 20
};

let obj1 = {
    center: centerObj,
    radius: 5.40
}
console.log(obj1);