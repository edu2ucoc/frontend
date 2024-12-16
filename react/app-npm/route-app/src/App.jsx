/**
 * App.stx  : 전체 화면을 관장(레이아웃을 가진) 컴포넌트, 상단:링크, 하단내용
 */
// 1. 모듈 가져오기
import { useState } from 'react'
// 2. 라우터 모듈 획득
import {
  Routes,
  Route,
  Link
} from 'react-router'
// 3. 개별 페이지 컴포넌트
import {  
  Home,
  About,
  Login, Register, AuthLayout,
  HomeExtend, City, Detail, Detail2
} from "./pages/Home";
import './App.css'

// 2. 컴포넌트
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <fieldset>
        {/* - 하위 페이지, 특정 페이지로 이동하는 링크 제공, 
            - 지속적 노출!!
            - URL 링크 등록시 => /붙여서 표현
            - a 태그 사용 X => 화면껌벅!! => SPA가 아님, 데이터가 모두리셋 
            - 빈칸1개 : &nbsp; <= html
            */}
        <nav>
          <Link to="/">■ 홈페이지</Link>
          &nbsp;
          <Link to="/about">■ about 링크</Link>
          &nbsp;
          <Link to="/login">■ login 링크</Link>
          &nbsp;
          <Link to="/register">■ register 링크</Link>
          &nbsp;
          <br/>
          <Link to="/dashboard">■ dashboard 링크</Link>
          &nbsp;
          <Link to="/dashboard/100">■ URL에 데이터 전송(상세페이지보기)</Link>
          &nbsp;
          <Link to="/dashboard/5">■ URL에 데이터 전송</Link>
          &nbsp;
          <br/>
          <Link to="/dashboard/30/detail">■ URL에 데이터 전송 응용1</Link>
          &nbsp;
          <Link to="/dashboard/50/detail2">■ URL에 데이터 전송 응용2</Link>
          &nbsp;
          <Link to="/dashboard/detail2">■ URL에 데이터 전송 응용3</Link>
        </nav>
      </fieldset>
      <fieldset>
        {/* - 라우트 되야 하는 페이지들을 등록, 개별페이지 세팅, 
            - 페이지에따라 계속 변경
            - Routes 하위에 등록된 컴포넌트들은 이 영역에서만 페이지가 교체됨
            */}
        <Routes>
          {/* Route 등록 : 1개가 URL이 되고, 특정 컴포넌트 세팅 
              - path="URL"  => 해당 컴포넌트를 볼수있는 URL 세팅, 
                ex) /, /xxxx, /xxxx/xxxx/.... <= 백엔드 구성하는 방식, 이전모듈
                ex) /, xxxx, /xxxx/xxxx => 상위그룹, 하위그룹 형태로 구성 대체
              - element => 해당 페이지 요청시 보이는 화면(컴포넌트)
          */}
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          {/* 컴포넌트를 묶어서 표현 */}
          <Route element={ <AuthLayout/> }>
            <Route path='login' element={ <Login/> }/>
            <Route path='register' element={ <Register/> }/>
          </Route>
          {/* 상위URL, 하위URL 세팅
            - /dashboard, /dashboard/데이터, /dashboard/데이터/yyy, ...  */}
          <Route path='dashboard'>
            {/* /dashboard <= index를 Route내부에 표기 
              - 특정 비즈니스 로직을 가진  URL들의 대표 홈페이지가 된다
            */}
            <Route index element={ <HomeExtend/> }/>
            {/* 동적 세그먼트, URL에 데이터를 동적으로 전달 
              - : <= 동적 데이터가 세팅되는 구간
                city <= 해당 데이터를 받는 변수명
                ex) :city
            */}
            <Route path=":city" element={<City/>}/>
            
            {/* /dashboard/데이터/detail, 데이터가 주소에 중간에 위치함 */}
            <Route path=":pid/detail" element={<Detail/>}/>
            
            {/* /dashboard/데이터/detail2 or /dashboard/detail2 
                ?는 선택문제(생략가능)
            */}
            <Route path=":lang?/detail2" element={<Detail2/>}/>

          </Route>
        </Routes>
      </fieldset>
    </>
  )
}

// 3. 컴포넌트 모듈화
export default App
