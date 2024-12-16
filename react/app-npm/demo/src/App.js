// 커스텀 컴포넌트, 홈페이지 담당(의미를 부여)
// 커스텀 컴포넌트, 하나의 화면(로그인..)|하나의 모듈(버튼|게시판)|구조

// 1. 리소스(이미지, css) 가져오기, 개발자 의도에 따라 달라질 수 있음
import logo from './logo.svg';
import './App.css';
// LifeCycle.js로부터 대표 모듈을 가져온다!!
// 대표모듈명 => LifeCycle 지정
import LifeCycle from './LifeCycle';
import MyInput from './MyInput';
import MyCheckBox from './MyCheckBox';
import MySelect from './MySelect';

// 대표 모듈을 제외한 private한 컴포넌트들은 여기에 같이 존재할수 있다

// 2. 함수형 컴포넌트 -> 커스텀 JSX를 생성, 특정기능 가지고 있다(대문)
function App() {
  // JSX를 반환
  return (
    <div className="App">
      {/* 요소에 css 적용중 class 적용 예시 className="클레스값" */}
      <header className="App-header">
        <MySelect languages={ ['자바','자바스크립트','리액트'] } 
                  initValue='리액트' />
        <MyCheckBox label="연말에 여행을 갈까?"/>
        <MyInput/>
        {/* <LifeCycle/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>SPA기반 react로 구성한 홈페이지</p>        
      </header>
    </div>
  );
}

// 현 파일에 대표!!
// 3. 대표 모듈화 처리 -> App 컴포넌트는 외부에서 사용 가능하다!!
export default App;
