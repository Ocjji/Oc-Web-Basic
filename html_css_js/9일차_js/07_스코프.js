{
    let num1 = 100;
    console.log(num1);
    {
        let num1 = 200;
        console.log(num1);
        {
            let num1 = 300;
            console.log(num1);
            {
                let num1 = 400;
                console.log(num1);
            }
            console.log(num1);
        }
        console.log(num1);
    }
    console.log(num1);
}

/* 
    스코프 : 유효범위(참조범위)
    블록 레벨 스코프 : {} - 함수 레벨 스코프 포함
    함수 레벨 스코프 : function 함수명(){}
    전역스코프 : {} 밖에 선언
    지역스코프 : 해당 {} 안에서만 사용가능 (주로사용)
*/