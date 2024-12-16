// 엔트리 포인트(진입로)
// 가급적 수정 x, 커스텀 컴포넌트 수정 OK

// ES Module (ESM) 방식의 모듈 가져오기 문법
// 1. 모듈 가져오기 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 커스텀 컴포넌트
// 대표모듈명으로 App을 지정
import App from './App';
import reportWebVitals from './reportWebVitals';

// 2. 아이디가  root인 요소와 동일한 형태의 VDOM을 만드는 과정
//    아이디가 roor인 요소를 특정하여 스왑처리를 위한 v-dom 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode : 차후 체크!! -> 2번 수행된다!!
// 편의상 조정 React.StrictMode -> div
root.render(
  <div>
    {/* React.StrictMode : 잠재된 오류를 체크, 개발시 사용 */}
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
