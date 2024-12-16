/**
 * 배열 (아주 중요!!!)
 *  - 자주 사용, react에서 많이 사용됨(통신결과)
 *  - 데이터 유형 (타입기준)
 *      - 단일형
 *          - number, string, boolean, ...
 *          - 값 1개가 타입 1개를 대변함
 *      - n개의 값이 모여서 구성된 타입
 *          - 연속형
 *              - (*)배열 (특수한 목적을 가진 객체)
 *                  - []
 *                  - 샘플 : [1, 2, 3, 5, 10, 55]
 *                  - 각 데이터의 의미가 애매함 -> 순서 존재 -> 인덱스(0, 1, 2,...)
 *          - 컬렉션  (키:값의 집합)
 *              - 객체 (객체 리터럴)
 *                  - {}
 *                  - 샘플 : { name:"온라인", age:20, ... }
 *                  - 각 데이터에 의미가 표현됨 -> name, age등 -> 키, 순서 x
 */
// 배열 정의
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// 배열 데이터의 특정 구성원 접근하여 값 추출 -> 인덱싱!!
// 배열명[ 인덱스 ]
// 값이 30인 맴버를 접근하여 데이터 30을 추출하시오
console.log( arr[2] );

// 반복문을 이용하여 모든 맴버의 값을 출력하시오
// 실습 2분, 기본 for문 사용
// 배열길이 체크
console.log( arr.length );
// 기본 for문
for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] ); 
}

// for in
// 배열의 길이를 몰라도, 존재하는만큼 추출하여 처리
for (const i in arr) { // 배열에서 인덱스를 하나씩 획득 0, 1, 2, ..
    console.log( arr[i] ); 
}

// for of
// 배열의 길이를 몰라도, 데이터를 추출해서 반환
for (const element of arr) {
    console.log( element );
}

// (*)배열을 위한 반복문
// 배열.내부함수();
//  forEach() 배열의 맴버를 접근해서 하나씫 추출하여 지정한 함수(콜백함수)로 던져주는 함수
// 용도 : 배열의 구성원을 하나씩 추출하여 뭔가 작업한다면!!
// 배열.forEach( 콜백함수 ), 콜백함수가 배열의 개수만큼 호출되었다
arr.forEach( ( item, index )=>{
    // item는 배열의 맴버(값)
    // index는 배열의 각 맴버의 순번
    console.log( '->', item, index );
} )

// 여기서부터는 다른 목적을 가진다!!
// map
// 배열의 맴버을 하나씩 꺼내서 뭔가 일괄작업 처리한다면 
// 요구사항 배열의 모든 맴버들의 값을 3배로 값증가
let arr2 = [10, 20, 30, 40, 50];
function mulx3 ( data ) {
    // 데이터가 1개 전달되면, 3배로 증가시켜서 반환
    console.log(`콜백함수 호출 원본=${ data } 변경값=${ data*3 }`);
    return data * 3;
}
// mulx3이라는 함수를 map() 함수에 인자로 전달 -> 함수의 매개변수로 함수 전달
// 이때 전달된 함수 -> 콜백함수
let results = arr2.map( mulx3 );
console.log( arr2, results );

// 코드를 간결하게 구성 => 화살표 함수 나 익명함수로 직접 함수를 인자로 전달!!
//let results2 = arr2.map( function ( data ) {    
//    return data * 3;
//} );
let results2 = arr2.map( data => data*3 );
console.log( arr2, results2 );
// 공통:서버로부터 데이터를 받아서 차트 구성, 게시판 구성, ... 유용하게 사용될수 있음

// filter
// 배열의 맴버를 하나씩 꺼내서 조건에 맞는 맴버만 추린다
// 배열 데이터 arr3에서 값이 30 이상(>=)인 데이터만 추출하시오 => 배열로 반환
// 초과 (>)
let arr3 = [10, 20, 30, 40, 50];
function cb ( data ) {
    // data는 arr3번 배열에서 하나씩 꺼내서  cb 호출할때 전달하는 데이터
    // 필터링 : 30 이상(>=) 참, 아니면 거짓 => 조건식(의 결론 boolean)
    return data >= 30;
}
let results3 = arr3.filter( cb );
console.log( arr3, results3 );
// 실습 : 40분에 2분 진행
// 1. 위의 표현을 화살표 함수로 변경하여 => filter( 화살표함수형태 ) 구현하시오
let results4_ = arr3.filter( ( data ) => {
    return data >= 30;
} );
let results4 = arr3.filter( data => data >= 30 );
console.log( arr3, results4 );

// 2. 필터링 대상은 짝수값만 나오는 배열로 추출하시오 (체크)
//    값 % 2 => 0|1
let arr4 = [10, 20, 30, 40, 51];
//let results5 = arr4.filter( data => data % 2 === 0  );
let results5 = arr4.filter( data => data % 2 ); // 홀수만!!
// data % 2 => 짝수면 0으로 해석 => 조건식에 0 => false로 처리됨 => 홀수만포함됨
console.log( arr4, results5 );
console.log( !(10 % 2), 10 % 2 === 0 ); // 0, true


// reduce
// 배열의 맴버를 하나씩 꺼내서 누적합, 누적곱, 등등 일괄연산 처리한다
// 누적합
// pv:이전값, cv:현재값
// 통계 <- 대시보드상 차트그리기시 데이터 연산처리할때 사용
console.log( arr4.reduce( (pv, cv)=> pv + cv ) ); // 151