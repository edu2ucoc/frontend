/**
 * 객체 구조 분해, 객체 비구조화 할당
 *  - JSON으로 전달받은 데이터  JS에서 객체로 받을 수 있다
 *      - JSON == JS의 객체
 *  - JS의 객체 내부에 존재하는 데이터를 추출하는 기법
 */

// 객체 변수명 pay, 데이터 name, price, 샘플값 "커피", 1500
// 객체 생성 1번 유형 객체 리터럴로 구성하시오
// 실습 1분
const pay = {
    name:"커피", // 객체의 키(맴버변수명) => 의미/의도를 가지고 있음
    price:1500
};
console.log( pay ); 

// 기존방식 
// 데이터 추출 : 객체명.맴버명
console.log( pay.name );

// 개선 => 비구조화 할당, 분해 -> react 에서 많이 사용
// 분해시 맴버명과 `동일`해야 한다!!
let { price, name, nm } = pay; // 순서 x
console.log( price, name, nm ); // nm은 pay 내부에 존재 하지 않음 => undefined

// 분해한 값을 수정한다면? 원본은 바귀는가?
// 원본이 보존된다!! O
price = 2000;
console.log( price, pay);

// 중첩구성
const person = {
    name:"js",
    spec:{
        age:33
    }
}
// age를 추출하시오
const { spec:{ age } } = person;
console.log( age );

