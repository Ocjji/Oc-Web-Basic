'use strict';

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
// /aaaaa/i 는 대소문자를 구별하지 않는다.
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted,





/* 
String.prototype.replace()
String.prototype.replace('찾을문자','바뀔문자')


replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.

pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다.
 */
/* 
구문
var newStr = str.replace(regexp|substr, newSubstr|function)

매개변수
regexp (pattern)
정규식(RegExp) 객체 또는 리터럴. 일치하는 항목은 newSubStr 또는 지정된 함수(function)가 반환 한 값으로 대체됩니다.

substr (pattern)
newSubStr로 대체 될 String. 정규식이 아닌 글자 그대로의 문자열로 처리됩니다. 오직 첫 번째 일치되는 문자열만이 교체됩니다.

newSubStr (replacement)
첫번째 파라미터를 대신할 문자열(String). 여러가지 대체 패턴들이 지원됩니다. 아래의 "매개변수가 string으로 지정되었을 때" 섹션을 참고하세요.

function (replacement)
주어진 regexp 또는 substr에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수. 이 함수에 제공되는 인수는 아래 "매개변수가 function으로 지정되었을 때"단원에서 설명합니다.

반환값
어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열
 */