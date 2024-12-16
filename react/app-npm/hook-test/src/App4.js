/**
 * useRef, useEffect 사용
 *  - 필요시 상태변수 사용
 *  - url을 이용하여 일종의 게시판형태(table 사용) 리스트 구성
 *      - 상품 데이터 => <tr> .. </tr>
 *  - 상품 데이터는? axios를 이용하여 데이터 획득
 *      - 통신 시점? 컴포넌트가 보이기 직전? or 필요시
 *      - 매번 요청하면 느리지 않는가? -> 최적화 개념 - 메모이제이션 기능 사용
 *      - useMemo, useCallback
 *      - 모듈 설치
 *          - npm install axios
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
import axios from 'axios';

async function getAllProducts( url ) {
    // 실습 2분 ajax 통신, axios 사용, 비동기처리(async ~ awit 활용)
    console.log('전체 상품 데이터 획득(페이징 기능 x)');
    const res = await axios.get( url );
    // 결과 출력
    console.log('통신 결과 출력', res.data);
    // 획득한 결과를 => JSX로 구성 => 화면에 표시까지 가능!
    // 배열 데이터 순환(map()) -> 데이터 1개씩 추출 -> <li key={idx}>데이터</li>
    return res.data.map( ( product, idx )=>{
        // 실습 1분 <li key={idx}>데이터</li> 이런 배열 나오도록 1차 구성
        // 상품 데이터(객체)에서 특정 데이터만 추출하여 변수에 할당
        // 나중에 실습 : rate값 추출
        const { id, title, description, price, image, category } = product;
        // JSON -> 전처리 -> JSX로 재구성
        return (
            <li key={idx}> {/* id값을 key값으로 사용 가능 */}
                <img src={ image } width='20px'/>
                <b>{title} / {price} $</b>
            </li>
        );
    } );
}

// 2. 대표 모듈화 + 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
export default function App ( {url, pid} ) {
    // 컴포넌트로 전달된 props를 바로 분해하여 변수로 처리
    console.log( url, pid);
    
    // 전달된 변수는 useRef를 통해서 통상 관리
    // 정의 : const|let 변수명 = useRef( 초기값 );
    const marketUrl = useRef( url ); // 값이 변경되어도 화면갱신 x 
    // 실습 : productID라는 useRef를 pid를 넣어서 생성,출력 : 30초
    // 전달되는 데이터는 모두 문자열, 특이케이스 제외하고
    const productID = useRef( parseInt(pid) ); // or Number(pid)

    // 상태 변수
    const [ productAll, setProductAll ] = useState(null);

    // useEffect => 컴포넌트, 상태변수등 모니터링 대상에 따라 호출
    // 기본형 => 컴포넌트가 보일려고 한다와 유사한 방식
    // useEffect( 콜백함수, [관찰대상]);
    useEffect( ()=>{
        // 관찰대상이 없으므로 1회성으로 호출!!
        console.log('컴포넌트가 보일려고 한다-componentDidMount()');
        // 1회성 => 최초에 ajax 통신을 통해서 상품 데이터를 획득
        getAllProducts( marketUrl.current ) // 결과가 비동기로 도착함!!        
        .then( data=>{
            // Promise  패턴에 의해 결과가 언젠가 도착하면(정상이면) then  진입
            // 상태변수값 조정
            // data -> JSX
            setProductAll( data );
        } )
        .catch()
        .finally();
    }, []);
    return (
        <div className='App'>
            <div className='App-header'>
                <p><span style={{ color:'red' }}>상품</span> 목록</p>
                <div>
                    <ul>
                        { productAll }
                    </ul>
                </div>
            </div>
        </div>
    );
}   