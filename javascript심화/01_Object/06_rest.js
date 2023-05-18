// 나머지 매개변수 , ...rest , ...사용자정의이름

const make = (...rest) => {
    console.log(rest);
    console.log();
}

const make1 = (...names) => {
    names.forEach(item => console.log(item));
}


make();
make('하나');
make('둘', '셋', '넷', '다섯');

make1();
make1('하나');
make1('둘', '셋', '넷', '다섯');

// 변수와 함께 사용할 경우 ...rest는 맨 끝에 사용한다
const add = (name, ...nums) => {
    let sum = 0;
    let sum2 = 0;
    nums.forEach(item => {
        sum += item;
    })
    sum2 = nums.reduce((acc, cur) => acc + cur + 0);
    console.log(sum);
    console.log(sum2);
}
add('하이', 10, 20, 30, 40);

const sum = (...rest) => {
    // console.log(rest);
    let sum = 0;
    for (let item of rest) {
        sum += item;
    }
    return sum;
}

const arr1 = [10, 20, 30, 40, 50, 60];
console.log(sum(...arr1));

