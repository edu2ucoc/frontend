/**
 * 함수형 컴포넌트로 구성 세팅
 */
// 1. 모듈 가져오기
// 스타일 가져오기
import './App.css';
// 훅 가져오기
import {
    // useXxxx
    useState,       // 상태변수->화면갱신
    useEffect,      // 중요한 생애 주기 함수 대체(부분)
    // -------------
    // 캐싱!! 개념 => 최적화 => 빠른 연산 및 반응속도(갱신)
    // 메모이제이션 기능 제공 -> 연산비용이 높은 작업 저장하여 재사용
    useMemo,        // 데이터     
    useCallback,    // 함수
    // -------------
    useRef,         // 데이터, 변경되어도 랜더링 되지 않는다, 참조
    // -------------
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
    // ...
} from "react";

// 2. 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
// JS 파일 내부에 컴포넌트가 여러개 정의 될수 있다!!
// 익명함수 스타일
const App2 = ( props )=>{
    // JSX 반환
    return (
        <div> 
            익명함수 스타일의 컴포넌트
        </div>
    );
}
// 표준함수 스타일
function App ( props ) {
    return (
        <div className='App'> {/* class 형태의 디자인 적용 */}
            <div className='App-header'>
                <App2/>
                표준함수 스타일의 컴포넌트
            </div>
        </div>
    );
}

// 3. 대표 모듈화 -> 오직 1개만 지정
export default App;