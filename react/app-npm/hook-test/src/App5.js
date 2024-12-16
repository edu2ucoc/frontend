/**
 * - 게시판 형태로 UI를 구성
 *      - JSX 수정 
 * - 제품 한개를 클릭 -> 상세 정보 보기
 *      - 창 띠우기? <= 차후 써드파트 GUI 컴포넌트 설치하여 구성
 *      - 상세 페이지 이동 <= 라우팅 처리 
 *      - 현재 화면에서 상단부분에 표시? <= 진행!!
 *      - 워크플로우 (오전 학습 정리시 가능하면 실습 진행)
 *          - 클릭 -> 어떤 상품을 클릭햇는가? -> id값
 *          - id값을 이용하여 상세 정보 획득(ajax 통신)
 *              - URL / 상품의id값
 *              - https://fakestoreapi.com/products/3
 *          - 통신 결과를 파싱 JSX로 구성
 *              - JSX는 일단 자유롭게 구성
 *          - product에 세팅
 *          - 화면갱신되어 확인!!
 *          - 필요시 구조 변경 가능!!
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

// 통신후 JSX 생성하는 별도 함수
async function getAllProducts( url, cb ) {
    const res = await axios.get( url );
    return res.data.map( ( product, idx )=>{
        const { id, title, description, price, image, category } = product;
        // 실습 3분 : <table>의 데이터 항목 <tr><td>... 구성되게 하위 조정
        // 함수로 감싸서 특정정보 id를 콜백함수에 전달하는 전략
        // 어떤 제품에 상세 보기를 요청(이벤트)가 발생했는지 관건!!
        return (            
            <tr key={idx} onClick={ ()=>{ cb( id ) } }>
                <th>{ title }</th>
                <th>{ price }</th>
                <th>{ category }</th>
                <th>{ description }</th> {/*차후 글자 요약 추가 필요*/}
            </tr>
        );
    } );
}

// 2. 대표 모듈화 + 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
export default function App ( {url, pid} ) {
    const marketUrl = useRef( url );
    const productID = useRef( parseInt(pid) );
    const [ productAll, setProductAll ] = useState(null); // 모든 제품 JSX
    const [ product, setProduct] = useState(null); // 1개 상품에 대한 상셍정보JSX
    
    const showProductDetail = async ( id ) => {
        console.log( '상세보기 요청', id);
        // 1. id값 기준 특정 상품 데이터 획득
        const res = await axios.get( `${ marketUrl.current }/${ id }` );
        // 2. 데이터:{}를 파싱 -> 동적으로 상세정보 JSX 구성
        const { title, description, price, image, category } = res.data; // 파싱
        // JSX 생성
        const pdtDetail = (
            <div>
                <img src={image} style={{ width:100, height:100 }}/>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </div>
        );
        // 3. setProduct( 동적구성된 JSX ) 
        setProduct( pdtDetail );
        // 4. 화면갱신 발생!! => 확인
    }

    useEffect( ()=>{
        console.log('컴포넌트가 보일려고 한다 : 최초 1회 실행');
        getAllProducts( marketUrl.current, showProductDetail )       
        .then( data=>{
            setProductAll( data );
        } )
        .catch()
        .finally();
    }, []); // 모니터링 대상이 없다!!

    // useEffect => 특정(product 상태변수) 변수의 변화를 감지하여 호출!!
    // 값이 변화되는 대상을 기준
    useEffect( ()=>{
        // 신규값이 세팅되면 호출!!
        console.log('2 product 감시', product);
        
        // 뒷정리 함수 배치 
        // -> 이전 상태변수값이 바뀌는 과정에서, 이전값을 뭔가 처리해야한다면
        // -> 생략 가능, 필요시 구현, 이전값이 전달됨
        return ()=>{
            // 이전값을 체크할 수 있는 마지막 단계!!
            console.log('1 product 감시', product);
        };
    }, [product]);

    return (
        <div className='App'>
            <div className='App-header'>
                <p><span style={{ color:'red' }}>상품</span> 목록</p>
                <div style={{ margin:'2em' }}>
                    <div>
                        {/* 상품 상세 정보 표시, fieldset:사각 테두리 박스 생성 */}
                        <fieldset>
                            { product }
                        </fieldset>
                    </div>
                    <br/>
                    <table border="1" >
                        <thead>
                            <tr>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>카테고리</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            { productAll }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}   