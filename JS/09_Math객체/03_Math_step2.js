'use strict';

// step2
// #6자리 - #16진수 0 ~ 9 , A ~ F ( 10 ~ 15 )

let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// #0012AF 

let color = '#';

for (let i = 0; i < 6; i++) {
    color = color + x[Math.floor(Math.random() * 16)];
}
console.log(color);


// 내가 필요한 랜덤값
// x[idx]
// idx = x의 16가지 중 하나를 뽑음 (0 ~ 15)
// idx = Math.floor(Math.random() * 16 // 16은 x의 길이 = x.length

// 결론 적으로 x[idx]에 idx를 대입하면,
// x[Math.floor(Math.random() * 16)]
// 위 코드는 x에서 idx 0 ~ 15를 랜덤으로 뽑아내는 작업이다.

// # + 6자리를 만들기 위해, for문을 통해서 총 6번 랜덤하게 뽑아야 한다.

// for (let i = 0; i < 6; i++) {
//      내가 실행하고 싶은 문장;
// }

// 내가 실행하고 싶은 문장은 color에 랜덤값을 계속 더해주는 것이므로,
// color += x[Math.floor(Math.random() * 16)]; 이다.
// 따라서 위와 같은 코드가 완성된다.