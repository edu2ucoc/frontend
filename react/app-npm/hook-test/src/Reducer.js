/**
 * - 훅
 *  - useReducer
 *  - 기존 상태변수 업데이트
 *      - 1가지 형태로 값을 업데이트, 값을 증가 등등 단순한 형태로 진행
 *      - ex) null <->  JSX, 1->2->3,.. 단순한 형태로 반영
 *      - 개선
 *          - 다양한 방식으로 업데이트 
 *              - ex) +1, -1, +2, +10, 100 세팅, 등등 다양한 요구사항 반영
 *          - useReducer를 이용하여 구현
 *              - 복잡, 다양한 업데이트 방식을 지원!
 *  - 요구사항
 *      - 업데이트 액션 (4가지 action을 정의)
 *          - 'up' : 수치값 +1
 *          - 'down' : 수치값 -1
 *          - 'reset' : 100으로 세팅
 *          - 'addLang' : 'ts'를 추가
 */
// 1. 모듈가져오기
import {
    useReducer
} from 'react';

// 2. 필요한 기능
function reducer( state, actions ) {
    // actions : 어떤 행위를 수행하라는 명령 : 'up', 'down', 'reset', 'addLang'
    // state : useReducer에서 정의한 데이터
    // 1. 전달된 데이터 추출
    const { action } = actions;
    const { age, langs } = state;

    // 2. 액션별 상태변수 업데이트(수정x , 새로운 객체로 대체) 처리
    if (action === 'up') {
        return { age:age+1, langs };
    } else if (action === 'down') {
        return { age:age-1, langs };
    } else if (action === 'reset') {
        return { age:100, langs };
    } else if (action === 'addLang') {
        return { age, langs:[ ...langs, 'ts' ] };
    }  
    throw Error('알수 없는 액션이 전달됨');
}

// 3. 커스텀컴포넌트 생성
export default function ReducerComponent(params) {
    // [ 상태변수, 액션을전달하는함수 ]
    const [ state, dispatch ] = useReducer( reducer, {
        // 관리하는 초기 데이터
        age:100,
        langs:[
            'JS', "react", "java", "springboot"
        ]
    } );
    return (
        <div style={{ margin:"1em"}}>
            <p>useReducer 테스트</p>
            {/* 객체 비구조화 할당(분해) 미사용 */} 
            <p>{ state.age }</p>
            <div>{ state.langs.map( (lang, i)=>{
                return (
                    <p key={i}>{lang}</p>
                );
            } ) }</div>
            <p>다양한 상태변수 업데이트</p>
            {/* 버튼클릭 -> 이벤트 발생 -> 액션전달( dispatch(액션) ) 
                -> 액션값에 따라 상태변수 업데이트( reducer가 처리 ) -> 화면갱신 */}
            <button onClick={ ()=>{ dispatch( { action:"up"      } ) } }>+ 1</button>
            <button onClick={ ()=>{ dispatch( { action:"down"    } ) } }>- 1</button>
            <button onClick={ ()=>{ dispatch( { action:"reset"   } ) } }>reset</button>
            <button onClick={ ()=>{ dispatch( { action:"addLang" } ) } }>랭귀지추가</button>
        </div>
    );
}