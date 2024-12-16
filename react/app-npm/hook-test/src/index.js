import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import App2 from './App2';
// import App3 from './App3';
//import App4 from './App4'; // 훅-기본
//import App5 from './App5'; // 훅-게시판 구현 및 상세페이지연출
//import App6 from './App6'; // 훅-메모이제이션
//import App7 from './App7';   // 환율 계산기
import App8 from './App8';   // 훅-useContext

// TODO 게시판-0 mui 모듈 가져오기 및 사용
import App6_mui from './App6_mui';// App6를 기반으로 UI를 교체(mui 사용)
import App7_mui from './App7_mui';// App7를 기반으로 UI를 교체(mui 사용) : 입력계열
import DashBoard from './DashBoard'; // 대시보드, 로그인 이후 진입하는 페이지(관리자, CMS, 관제, ERP, ..)
import reportWebVitals from './reportWebVitals';
import ReducerComponent from './Reducer';
import CusHook from './CusHook';
import Counter from './state/Counter';
import CssComponent from './css/CssComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}
    {/* 함수형 컴포넌트 + 훅 기본형태 */}
    {/* <App2/> 
    <App3/> */}
    {/* <App4 url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App5 url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App6 url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App7/> */}
    {/* <App8/> */}
    {/* <App6_mui url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App7_mui/> */}
    {/* <DashBoard/> */}    
    {/* <CusHook/>
    <ReducerComponent />     */}
    {/* <Counter/> */}
    <CssComponent/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
