import React from 'react';
import Customer from "./customer/Customer";
import './assets/css/reset.css';

// import './assets/css/reset.css';

const App = () => {
  return (
    <div>
      <Customer />
    </div>
  );
};

export default App;

/* 
  useEffect

  Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있다.
  side effect : 부수적인 효과
                함수 결과값을 반환하는 것 외에
                다른 수행을 하는 것

                데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다.

  class 생명주기


  위 세가지를 합쳐놓은것
  useEffect

  형식)
  useEffect(콜백함수, [의존값]);

  형식1) mount 처음 한번만 / update 갱신(수정) - 할때마다

  useEffect(()=>{
    실행문
  })

  형식2) mount 처음 한번만 실행할때

  useEffect(()=>{
    실행문
  },[])

  형식3) mount 처음 한번만 실행 / 특정 state 또는 props가 변경될때
  *** 많이 사용 *** 특정 props가 변경될때 update

  useEffect(()=>{
    실행문
  },[state, props])

  형식4) 정리(Clean-up) : 뒷정리
  mount 처음 한번만 실행 / 특정 state 또는 props가 변경될때
  *** 많이 사용 *** 특정 props가 변경될때 update

  useEffect(()=>{
    실행문

    뒷정리
    return() => {
      실행문
    }
  },[state, props])

  정리(Clean-up) : 메모리 누수가 발생하지 않도록 하는 것

  useEffect : 화면에 그려진 후
  useLayoutEffect : 화면에 그려지기 전


  사용범위
  1. props를 받아서 갱신할 때
  2. 외부 api( 비동기 처리 - ajax - axios / fetch 등)
  3. 시간 관리 - setTimeout / setInterval
  4. 외부 라이브러리

*/