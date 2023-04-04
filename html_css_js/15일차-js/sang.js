function parent() {
    var a = 100;
    // child 내부 함수
    var child = function() { // child 함수의 정의
        console.log(a);
    }
    // child 함수 반환
    return child;
} // parent 함수의 정의 
var inner = parent(); 
inner();