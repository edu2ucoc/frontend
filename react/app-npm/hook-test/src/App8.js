/**
 * useContext(), createContext()
 *  - 리액트는 컴포넌트의 집합
 *  - 컴포넌트는 트리 구조로, 부모-자식-후손형태로 배치
 *  - 상위 컴포넌트의 정보를 하위 컴포넌트에게 전달
 *      - 컴포넌트간 데이터 전달 방법!!
 *          - 1세대 : redux, 2세대 : Mobx,.. (*)3세대 : ? <= 써드파트 방식
 *      - useContext()를 이용한 방식 추가
 *          - 상위 컴포넌트에서 전달한 데이터가 변경되면 
 *            -> 하위컴포넌트도 영향을 받아 변경된다
 *      - props를 활용 구성 (복잡)
 *      
 */
// 모듈 가져오기
import './App.css';
import {
    useState,       // 상태변수->화면갱신
    useEffect,      // 중요한 생애 주기 함수 대체(부분)
    useMemo,        // 데이터     
    useCallback,    // 함수
    useRef,         // 데이터, 변경되어도 랜더링 되지 않는다, 참조
    useContext,
    createContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from "react";

// 1. 전역공간에 컨텍스트 생성
//    어떤 타입의 데이터던 저장 가능함
const TextContext = createContext("목요일 마지막 타임");

// 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
function End () {
    // 하위 컴포넌트가 사용하는 훅!!
    const data = useContext( TextContext );
    return (
        <>
            <p>가장 하위 컴포넌트</p>
            { data }
        </>
    );
}
function Mid () {
    return (
        <>
            <End/>
        </>
    );
}
function App ( props ) {
    // const [ sendingData, setSendingData ] = useState({
    //     // 필요한 데이터를 나열 -> n개의 데이터나 함수들 전달
    // });
    const [ sendingData, setSendingData ] = useState("전달데이터");
    return (
        <div className='App'> {/* class 형태의 디자인 적용 */}
            <div className='App-header'>
                <h2>useContext 테스트</h2>
                {/*
                    2. 전달할 데이터를 받을 컴포넌트를 감싸서 표현
                       - 전역으로 만든 컨텍스트 활용하여 공급 표현
                       - 상위 컴포넌트의 데이터도 전달
                            - 기본값은 공급할때 변경가능하다!!
                       - 상위 컴포넌트에서 상태변수(전달된 데이터)를 
                         변경하면->하위도영향받는가?
                */}
                <TextContext.Provider value={sendingData}>
                    <Mid/>
                </TextContext.Provider>
                <input  onChange={ e=>setSendingData(e.target.value) } 
                        value={sendingData}
                />
            </div>
        </div>
    );
}

// 대표 모듈화 -> 오직 1개만 지정
export default App;