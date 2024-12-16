/**
 * 함수(메소드:객체 내부에 존재하는 함수)
 *  - JS는 최근 몇년간 함수 지향적 프로그래밍 스타일로 대부분 작성 많이되고 있음
 *  - reactjs에서 많이 발견됨
 *  - 정의 
 *      - 특정 업무를 특정 `작업단위`로 묶어서 업무 처리 가능한 `단위`
 *          - ex) 로그인함수, 글쓰기함수, ...
 *      - 특징
 *          - 코드 관리 용이, 재활성 극대화, 라이브러리 작성 용이
 *          - 유지보수, 사용성 모두 개선됨 => 생산성 향상
 *          - 반복적인 코드를 함수를 통해서 표현, 재사용성 극대화
 *              - 반복적인 코드 => 함수 정의
 *              - 반복적인 코드 사용 => 함수 호출
 *  - 요소
 *      - 입력 -> 외부데이터가 함수내로 진입, 매개변수, 인자
 *      - 작업(로직, 구현내용) -> 비즈니스 로직, 반복적인 코드
 *          - 생성형 AI => GPT 추론 요청응답 => 결과를 출력
 *          - 로그인 => ID,PW -> 디비 쿼리 -> 결과를 출력
 *      - 출력 -> 함수내 처리결과를 함수 바깥으로 전달
 */
/*
    - 종류
        - 형태
            - (**)표준함수 (기본형)
            - (*)익명함수 (이름 x)
            - (*)화살표(에로우) 함수 (ES Next에서 추가됨)
        - 용도
            - 기본함수
            - (*)콜백함수 (비동기 처리를 위한)
            - 값의형태로 함수를 사용
    - 문법
        - 표준함수, []는 생략 가능하다는 의미
        function 함수명 ( [파라미터:매개변수, ..] ) {
            [statements ...]
            [return [값]]
        }

*/

/**
 * 1. 표준함수
 */

// - 형태 : 표준함수
// - 기능 : 더하기 기능을 가진 함수  add를 구현하시오
// - 입력 : 두개의 수를 입력, x, y 
//          => 함수 정의할때 용어    -> 매개변수(파라미터)
//          => 함수를 사용할때(호출) -> 인자, argument
// - 출력 : x+y 결과를 반환
// 함수 정의
function add( x, y ) {
    let result = x + y + 100; // statements
    // +100 : 함수 내부를 수정(업데이트) -> 사용하는 모든 곳이 업데이트 됨
    //        유지보수 용이함
    return result;
}
// 함수는 정의 -> 사용해야 작동된다!! -> 함수 호출
// 문법 : 함수명( 인자 );
// 함수 사용 => call by value (함수를 호출하고 값을 반환)
console.log( add( 1, 2) );

// 특정위치에서 더하기 기능이 필요하면? -> 함수 호출만 하면 해당기능 사용할수 있다
let temp = add( 100, 2);
console.log( temp );


// 실습
/**
 * 요구사항
 *  - 표준함수
 *  - 매개변수는 3개 , x, y, z
 *  - 함수 기능 : x 와 y는 더하고, 앞에 더한값을 z는 곱한다
 *  - 출력 : 위의 연산 결과값을 반환
 *  - 해당되는 함수 정의, 함수 호출 결과확인 -> 3분
 *  - 함수명 : cal
 */
function cal(x, y, z) {
    return (x + y) * z;
}
console.log( cal( 1, 2, 3 ) );


// 함수를 정의한곳보다 더 위에서 함수를 호출 -> 오류 x <= 함수 호이스팅
// 인터프린터가 코드를 수행할때, 표준함수는 맨위로 올린다!!
// 함수정의, 사용하는 순서대로 작성
console.log( '함수 체크 : ', cal2( 1, 2, 3 ) );
function cal2(x, y, z) {
    return (x + y) * z;
}


/**
 * 익명함수 <-> 기명함수(표준함수)
 *  - 표준함수에서 이름이 생략되었다
 *  - 함수는 표현식으로 표현된다
 *  - 용도 : 변(상)수의 값으로 세팅, 함수의 인자로 사용->콜백함수
 */
// 변(상)수 값으로 함수를 세팅, 함수명 필요 없음
// 변(상)수명이 함수명이 됨
// 호이스팅 주의!! 반영 않됨
const cal3 = function (x, y, z) {
    return (x + y) * z;
}
console.log( cal3(1,2,3) );


/**
 * 매개변수
 *  - 함수를 호출할때, 데이터를 전달하는 채널로 이해 (함수 내부로 전달)
 */
function setInfo (name="오프라인", age=20) {
    // 실습 name, age 를 템플릿 문자열(` ${} ${} `)로 표현하여 출력(포멧팅)
    console.log( `${name} ${age}` );
}
setInfo("온라인",30);
// 인자를 모두 비우고 호출
// 오류 x, 인자값은 모두 초기화 x -> undefined
// 장점 : 매개변수에 초기값(기본값) 부여 -> 매개변수의 타입을 제시
//       인자값 누락시 대체처리, 중요값 표시
setInfo(); // 기본값으로 대체됨
setInfo("하프"); // 하프 20
setInfo(30); // 30, 20 => 인자값은 순서대로 들어간다 !!
setInfo(age=30); // 적용않됨, 무조건 순서대로!!


/**
 * 화살표 함수
 *  - ES Next에서 추가된 내용
 *  - 함수를 아주 간결하게 표현
 *  - 규칙 (표준함수를 화살표함수로 변환)
 *      1. function 생략
 *      2. 함수명 생략 -> 익명함수
 *      3. () : 매개변수가 1개면 생략가능, 없거나 2개 이상이면 무조건 사용
 *      4. => : 화살표 추가
 *      5. {} : 수행문 1개이고, 리턴값이 존재하면 생략가능함, return 생략가능
 *  - 가장 짧은 함수를 표현
 *      ()=>{}
 */
// 입력과 출력을 강조하는 함수 형태 -> 화살표 함수
const calArrow = (x, y, z) => (x + y) * z;


// 실습
// 1. 표준함수 형태로 매개변수 2개를 입력받아서 더하기 처리하여 반환하는 함수
//    함수명 add2
function add2 ( x, y )  {
    return x + y;
}
// 2. 위 함수를 익명함수로 변환, 상수 add3으로 익명함수를 값으로 받게 처리
// const => 환경변수, 함수값, 객체값을 받을때 주로 사용, 함수나 객체는 잘 않바뀜
const add3 = function ( x, y )  {
    return x + y;
}
// 3. 위 함수를 화살표 함수로 변환, 상수 add4의 값으로 처리
const add4 = ( x, y ) => {
    return x + y;
}
// 4. 위 함수에서 생략할수 있는 부분을 모두다 생략(간소화 처리), 상수 add5
const add5 = ( x, y ) => x + y;

// 5. 매개 변수가 1개라면? 화살표함수에서 () 생략 가능함
const cal4 = (x) => x*5; 
const cal5 = x => x*5; 

// 6. 함수가 객체 -> {} 를 리턴한다면? (참고)
const cal6 = (a,b) => { return { result:a+b } };
//    값의 의미로 ()로 감싸면 처리됨 => react에서 자주 등장함
const cal7 = (a,b) => ( { result:a+b } );
console.log( cal6(1,2) ); // 출력결과 : { result: 3 }
console.log( cal7(1,2) ); // 출력결과 : { result: 3 }




















/**
 * 콜백함수 -> 비동기 처리시 체크
 */