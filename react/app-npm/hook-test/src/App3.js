/**
 * useState 사용
 */
// 1. 모듈 가져오기
import './App.css';
import {
    useState,       // 상태변수->화면갱신
    useEffect,      // 중요한 생애 주기 함수 대체(부분)
    useMemo,        // 데이터     
    useCallback,    // 함수
    useRef,         // 데이터, 변경되어도 랜더링 되지 않는다, 참조
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리    
} from "react";

// 2. 대표 모듈화 + 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
export default function App ( props ) {
    // 함수형 컴포넌트 기본 로직, 변수, 함수등 구현하는 위치
    console.log( '함수형 컴포넌트 구성' );
    
    // A-1. 상태변수 초기화 => useState 훅 활용
    // const|let [ 변수명, set변수명 ] = useState( 초기값 )
    // set변수명 는 생략가능함 => 업데이트 않함
    const [ count, setCount ] = useState( 1 ); // xxx(초기값);

    // A-3. 상태변수 업데이트 및 동적 JSX 구성
    const countJsx = (
        <>
            {/* 
                - 버튼을 클릭하면 상태변수 +1증가 -> 화면갱신 
                - 실습 : 클릭이벤트 등록, inline 방식으로 이벤트핸들러 등록
                - 1분                
            */}
            <button onClick={ ()=>{ setCount( count+1 ) } }>
                카운트 : { count }
            </button>
        </>
    );

    // B-1. useState를 이용한 조건부 랜더링(null 검토)
    // 통신을 통해 데이터를 받아서 세팅할때 -> 동적 화면 처리
    // JSX의 세팅값 null이면 처리 x
    // 실습 뒤쪽 항목 채우기
    const [ pageContent, setPageContent ] = useState( null );

    // B-2. JSX 생성
    // div 요소 준비, onClick 이벤트 등록, 화살표함수 이벤트핸드러 등록
    // 내용은 pageContent = [ {pageContent} ]
    const condiJsx = (
        <>
            {/* 클릭하면 => pageContent이 업데이트됨 */}
            <div onClick={ ()=>{ 
                // 값을 번갈아 세팅 : null -> '내용세팅됨' ->null ..
                setPageContent( pageContent ? null : '내용세팅됨' )  
            } }>
                {/* null  자체는 랜더링 x */}
                pageContent = [ {pageContent} ]
                <br/>
                {/* null 조건식에 위치하면 무조건 false */}
                { pageContent ? "참일때값" : "거짓일때값" }
            </div>
        </>
    );

    // JSX 반환
    return (
        <div className='App'>
            <div className='App-header'>
                작성
                <br/>
                {/* useState 
                    A-2. 상태변수 사용
                */}
                { countJsx }
                
                {/* B-2, 상태변수 사용 - 조건부랜더링 */}
                { condiJsx }
            </div>
        </div>
    );
}
