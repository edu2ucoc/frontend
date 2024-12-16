/**
 * 흐름제어 -> 조건문
 *  - 현재까지 기존코드는 => 1번라인 수행, 2번라인수행, ....n번라인수행
 *  - 위에서 아래로 진행되는 코드의 흐름 제어(방향을 틀고, 반복하고, 생략하고)
 *  - 조건문
 *      - 문법
 *        // 조건식이 참이면 수행문이 수행된다!!
 *        if ( 조건식(condition expression) ) {
 *              수행문(statements)
 *        }
 *        // 조건이 여러개라면? if ~ else if ~ else if ~ else ~ 
 *  - 조건식
 *      - 결과는 항상 true, false : boolean형
 *      - 조건식에 사용하는 연산자
 *          - (*)비교연산자
 *              - > , <, >=, <=, ==, !=
 *              - ===, !==
 *          - (*)논리연산자
 *              - A && B : A가 거짓이면 그냥 false, A와 B가 참이여야 참
 *              - A || B : 하나라도 참이면 참
 *              - !A : 무조건 부정(A가 참이면 false, 거짓이면 true)
 *          - 삼항연산자
 *              - 조건식 ? 참일때값(코드) : 거짓일때값(코드)
 *          - 기타 (차후체크)
 *              - 논리적 할당 연산자
 *                  - &&=, ||=, ??=
 *              - 비트 연산자
 *                  - &, |, ^, ~, <<, >>, >>>
 *              - 배열에 데이터가 포함되었는지 체크, 객체 체크
 *                  - in, instanceof
 */
// 1.  기본 if문
// 조건이 1개, 해당되면 수행, 아니면 생략
let coffeePrice = 1500;
if (coffeePrice > 1500) {
    // 커피가격이 1500보다 크다(면), "커피 구매 실패" 문자열 출력한다
    console.log( "커피 구매 실패" );
}

// 2. 기본 if문 <-> 삼항연산자로 대체 가능
// 조건이 2개, 해당되면, 해당않되면
// 모든 상황은 둘중에 하나이므로, 조건식은 1개면 충분
if (coffeePrice > 1500) {
    console.log( "커피 구매 실패" );
} else { // 조건식 필요 없음
    console.log( "커피 구매 성공" );
}

// 3. 기본 if문
// 조건이 3개이상
// 현재 상황이 5개가 존재
let score = 70;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} 
// else 이하는 생략 가능하여 나머지 그룹에 대한 처리를 않할 수도 있음
else {
    console.log("F");
}

// 4. 삼항연산자, 값세팅 예시
let memberLv = 10;
let levelName = memberLv >= 10 ? "VIP" : "NORMAL";
console.log( levelName );
// 실습 2분, 위의 삼항연산자 코드를 if문으로 표현하시오

if (memberLv >= 10) {
    levelName = "VIP";
} else {
    levelName = "NORMAL";
}
// 수행문이 1개이면 {} 생략 가능함
if (memberLv >= 10)     levelName = "VIP";
else                    levelName = "NORMAL";

// 5. switch문 -> 케이스별로 분기 처리
//    조건식 경우 값의 일치여부 활용
let curDay = new Date().getDay(); // new Date()는 현재 시간(년월일시분초)
console.log( curDay ); // 수 -> 3
// curDay값에 따라 요일을 출력하시오
switch (curDay) {
    case 1:        
        console.log("월요일");
        //break; // break를 생략하면 다음  케이스가 현 케이스에 추가된다 
    case 2:        
        console.log("화요일");
        break;
    case 3:        
        console.log("수요일");
        break;
    default:
        console.log("일, 목~토요일 중에 하나 일치");
        break;
}

// 6. 중첩 조건문
let age = 30;
if (age>10) {
    if (age<40) {
        // 10 < age 그리고 age <40 => 이 두조건을 만족하는 경우!!
        // 점점 대상을 좁히면서 표현할때, 기타 필요시
        console.log(`age ${age}`);
    }
}

// 7. 논리연산자(쇼트 연산자)
//    요구사항 => (age가 10보다 크`고`), (age가 40보다 작으`면`) age를 출력하시오
//    A && B => 모두가 참이면 참, 하나라도 거짓이면 거짓
//if ( 10 < age && age < 40 ) { // 표현자체가 선호됨(개인취향)
//if ( age > 10 && 40 > age ) {
if ( age > 10 && age < 40 ) {
    console.log(`age ${age}`);
}

// 8. 기타 (차후 적용)