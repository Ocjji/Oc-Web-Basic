import React, { useMemo, useState } from 'react';

const Test1 = () => {
    const [cnt1, setCnt1] = useState(1);
    const [cnt2, setCnt2] = useState(10);

    // 사용자 정의 함수
    const isEven = useMemo(() => {
        console.log("test");
        console.log(cnt1);
        return cnt1 % 2 === 0;
    }, [cnt1])
    return (
        <div>
            <h2>카운트1 : {cnt1}</h2>
            <button onClick={() => setCnt1(cnt1 + 1)}>증가</button>

            <h2>카운트2 : {cnt2}</h2>
            <button onClick={() => setCnt2(cnt2 + 1)}>증가</button>
            <h2>
                홀 / 짝 결과 : {isEven ? "짝수" : "홀수"}
            </h2>
        </div>
    );
};

export default Test1;

/* 
  “생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요. 통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 하지 마세요. 예를 들어, 사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.

  단 useMemo를 useEffect처럼 사용하지 말자

  렌더링 될 때마다 새 값을 계산한다
  변수, 함수, 값을 다시 생성 / 계산

  훅 use+명령어

  useMemo / useCallback
  useMemo : return 값을 기억한다 ( 보통 사용자 정의 함수 )
  useCallback : 함수기억

  문법
  useMemo( 콜백함수, [의존성] )
  
  useCallback( 콜백함수, [의존성] )
*/