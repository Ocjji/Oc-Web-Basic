'use strict';

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const str1 = 'fox  ,  jumps, over  , the  , lazy ,  dog';

const spl = str1.split(',');
console.log(spl);
for (let i = 0; i < spl.length; i++) {
    spl[i] = '#' + spl[i].trim();
}
console.log(spl);

for (let x in spl) {
    console.log(x);
}
for (let x of spl) {
    console.log(x);
}

/* 
String.prototype.split()

split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

*/

/* 
    구문
    split()
    split(separator)
    split(separator, limit)

    경고: 주의: 구분자로 빈 문자열("")을 제공하면, 사용자가 인식하는 문자 하나(grapheme cluster) 또는 유니코드 문자(코드포인트) 하나씩으로 나누는 것이 아니라, UTF-16 코드유닛으로 나누게 되며 써로게이트 페어가 망가질 수 있습니다. 스택 오버플로우의 How do you get a string to a character array in JavaScript? 질문도 참고해 보세요.

    매개변수
    separator (Optional)
    원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다. 실제 문자열이나 정규표현식을 받을 수 있습니다. 문자열 유형의 separator가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어집니다. separator가 생략되거나 str에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가집니다. separator가 빈 문자열일 경우 str의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다.

    limit (Optional)
    끊어진 문자열의 최대 개수를 나타내는 정수입니다. 이 매개변수를 전달하면 split() 메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만 배열의 원소가 limit개가 되면 멈춥니다. 지정된 한계에 도달하기 전에 문자열의 끝까지 탐색했을 경우 limit개 미만의 원소가 있을 수도 있습니다. 남은 문자열은 새로운 배열에 포함되지 않습니다.

    반환값
    주어진 문자열을 separator마다 끊은 부분 문자열을 담은 Array.
    Array로 반환된다는 것이 중요함.
*/






