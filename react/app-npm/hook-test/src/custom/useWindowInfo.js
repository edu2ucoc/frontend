/**
 * 커스텀 훅, 사용자 정의 훅, 필요에 의해서 생성
 *  - useXxxx 구성
 *  - 요구사항
 *      - 기존의 훅을 활용하여 새로운 기능을 가진 훅을 생성
 *      - useState, useEffect 활용
 */
// 1. 모듈 가져오기
import {
    useState, 
    useEffect
} from 'react';

// 2. 대표모듈화 + 커스텀훅 생성
const useWindowInfo = ()=>{
    // 목표: 현재 브라우저 화면(윈도우)의 정보를 획득(가로길이, 세로길이)하여 제공
    //       컴포넌트의 크기가 변경되면 같이 윈도우 정보도 변경되어 제공

    // 1. 상태변수 초기화, 현재 브라우저 정보 세팅
    const [windowSize, setWindowSize] = useState( {
        // window는 브라우저상 JS를 통해 접근 가능한 내장객체
        width : window.innerWidth,
        height: window.innerHeight
    } );

    // 2. useEffect 활용
    useEffect( ()=>{
        // 이벤트 핸들러 함수
        const 이벤트핸들러 = () => {
          setWindowSize({
            width : window.innerWidth,
            height: window.innerHeight
          })  
        }
        // 윈도우의 크기가 변경되면 resize이벤트 호출 => 콜백함수 호출 => 정보갱신
        window.addEventListener('resize', 이벤트핸들러 );
        // 뒷정리 코드 -> 훅을 더이상 사용하지 않을때
        return ()=>{
            // 반드시 브라우저상에 존재하는 윈도우 객체에 이벤트 삭제처리
            window.removeEventListener('resize', 이벤트핸들러 );
        };
    }, []);

    // 커스텀훅 상태변수 반환 <-> 컴포넌트는 JSX 반환하는 랜더함수 구성하면서 마무리
    return windowSize;
}


export default useWindowInfo;