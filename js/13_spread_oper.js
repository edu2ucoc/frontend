/**
 * 스프레드 연산자 -> es next 에서 추가
 *  - ...변수명(배열|객체)
 *  - 깊은 복사(주용도)
 *  - 표현의 간결화!!
 */

// 1. 배열 원본 (깊은) 카피
// 배열의 병합
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log( arr1 + arr2 ); // 의도 x
console.log( [arr1,arr2] ); // 의도 x : [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// 의도 : 병합 => [1,2,3,4,5,6]
// 스프레드 연산을 통해서 간단하게 해결됨
console.log( [ ...arr1, ...arr2 ] );// 많이 사용됨
console.log( [ ...arr1  ] ); // 배열 원본 depp 카피
const arr3 = [ ...arr1  ];
arr3[0] = 100; // arr1의 사본에서 특정 맴버(0번째) 값을 수정
console.log( arr3, arr1 ); // 사본, 원본 확인 -> 서로 영향 없음

// 2. 배열구조 분해시, 나머지연산 -> 남은 맴버 일괄적으로 받기
let [ a, ...rest ] = [1, 2, 3,4, 5];
console.log( a, rest ); // rest는 분해한값 제외한 나머지로 배열 구성

// 3. 문자열 데이터 + 배열 스프레드 연산
//    특이케이스 , 문자열 분해 => 배열의 맴버로 세팅
console.log( [ ..."helloworld" ] ); // [ 'h',... ]

// 4. 객체 병합
//    n개의 객체(데이터)를 한개의 데이터로 통합
const s1 = { score:50, subject:"수학" };
const s2 = { score:90, age:100 };
// 샘플 데이터는 중복 키가 존재함(score)
// 객체 병합시 무엇이 우선되는가?
console.log( { ...s1, ...s2 } ); // 나중에 복사되는 데이터가 우선한다!!

// 5. 객체 깊은 복사
const s3 = { ...s1 };
s3.score = 100;
console.log( s3, s1 ); // 원본 유지

// 6. 함수 사용시 스프레드 연산 활용
function test(a, b, c) {
    console.log( a, b, c);
}
test(  s1 ); // { score: 50, subject: '수학' } undefined undefined

// 배열의 값을 일일이 인자에 넣어서 함수 호출하고 싶다면
test( arr1[0], arr1[1], arr1[2] );

// 배열스프레드를 함수 인자로 전달
// =>배열구조분해작동=>인자에 순서대로 세팅됨
test( ...arr1 ); 
// 맴버수가 인자수보다 더 많다면? => 상관없음, 순서대로 분해된다!!
let arr4 = [ ...arr1, ...arr2 ]; // 맴버수가 6
test( ...arr4 ); // 인자수 3

// 7. 객체 스프레드 연산을 함수에 활용
//    아래는 객체 구조분해 응용
function test2 ( {score,  subject} ) { // 매개변수 형태 =>객체 구조분해
    console.log( score, subject );
}
test2( s1 ); // s1는 score에 전달됨

// 매개변수가 스프레트 연산자 활용
// 반드시 섞어서 표현할대는 일반인자 먼저 등장, 마지막에 가변인자 표현
function test3 ( a, ...data ) { // 섞어서 표현 : (일반인자,...  가변인자)
    console.log( a, data );
    for(let temp of data ) {
        console.log( temp );
    }
}
test3( 1 );
test3( 1, 2 );
test3( 1, 2, 3 );
