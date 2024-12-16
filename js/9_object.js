/**
 * 객체, `키:값`을 여러개 가진 `컬렉션 타입`
 *  - 데이터간 서열 x
 *  - 클레스 형태를 표방, 객체 지향을 모방하기 때문에 객체지향 스타일 지향함
 *      - 상속, 재정의, 생성자, 맴버 라는 개념이 모두 포함되어 있음
 *  - {} 로 표현
 *  - JS의 객체 생성 방식 -> 5가지
 *      - (*)1. 객체 리터럴
 *      - 2. object 확장
 *      - 3. 생성자 함수
 *          - 메모리적인 낭비가 존재할수 있다
 *      - (*)4. 생성자 함수 + 프로토타입 확장 방식 => 객체를 표현하는 가장 본질
 *      - (*)5. class 구현
 *          - es Next에서 추가됨
 *          - 초창기 5년간 react 개발시 주력으로 사용됨 => 현재(함수형)는 잘 사용 x
 *              - 리엑트에서 훅이 추가되면서 함수형에서도 
 *              - class형의 기능들을 대체할수 있게 되었음
 *          - 4번 방식을 일반적인 클레스 형식을 도입하여 적용(포장했다)
 *  - 객체
 *      - 이 세상에 존재하는 모든 유형|무형의 존재를 엔티티
 *          - 유형: 자동차, 사람, 컴퓨터, .. 
 *          - 무형: 개념, 민주주의, ...
 *      - 엔티티를 프로그램 세상에서 표현하기 위해서 문법적 방식 제공 -> class
 *          - class 문법을 이용하여 엔티티 코드로 표현한것
 *          - JS에서는 1~5번까지 문법 사항
 *      - class로 작성한 내용을 메모리에 띠우면(실행하기 위함) -> 객체
 *          - 여러번 생성 가능
 *          - 객체는 메모리상에 주소를 가진다
 *          - 특정 변수가 이 메모리상에 객체를 참조하면 이 변수는 
 *            객체를 참조하는 변수라고 부른다 (참조형 변수)
 *          - let a = 10 // 타입은 수치형
 *          - a = "hi" // 타입은 문자열
 *          - a는 가르키는 대상이 바꼇을뿐!! 
 *            => a의 타입은을 가르키는 대상에 따라 결정된다
 *            => 타입 추론형!!
 */
// 1. 객체 리터럴 => { .... }
// 용도 -> `1회성`으로 `여러개의 데이터 묶어서 전달`(객체생성시,함수의 인자)할때!!
// 같은 내용의 객체를 여러개 생성한다? => 이 유형은 적절하지 않음
const obj = {}; // object  타입
console.log( obj, typeof obj);

let height = 170; // 전역변수
let w = "weight"; // 동적속성명 지원을 위한 샘플, 이 값을 키로 사용하고 싶다
const obj1 = {
    // 데이터 추가(데이터 관점), 맴버를 추가(객체지향프로그래밍 관점)
    // 키:값, 키:값, 키:값(모든타입, 단일형, 연속형, 컬렉션, 함수...)
    name:"JS",
    age:33,
    height, // 전역변수를 추가함으로써 데이터 혹은 맴버로 추가
    // 동적속성명추가
    [w]:60, // computed property names 동적속성이름정의
    arr:[1,2,3,4],
    spec:{},
    // 함수
    getAge:function () { 
        // (*)객체 내부에서는 맴버 접근하는 내용이 존재하면 표준(익명)함수형태
        // 같은 구성원의 데이터를 사용하고 싶다
        // 객체내 맴버를 접근하고 싶다
        // 객체를 지칭하는 용어는? this (타언어중에는  self)
        return `${ this.name }의 나이는 ${ this.age } 입니다. `;
        // 화살표 함수 내부에서 this 사용 주의필요(가급적 배제)
    },
    // 함수를 직접 넣거나, 외부에 존재하는 함수를 삽입
    print(){
        console.log("출력");    
    }

};
console.log( obj1 );
// 객체의 맴버(데이터, 함수)를 접근할때 사용하는 연산자 => .(도트연산자)
// 객체명.변수,  객체명.함수, 객체명[ '키값' ]
console.log( obj1.age, obj1['age'] );
console.log( obj1.getAge() );


// 4. 생성자 + 프로토타입(확장시)
// 생성자함수 => 첫글자 대문자(통상 클레스명)
function Person ( nm ) {
    // 생성자 => 객체지향프로그램, 클레스에서는 객체를 생성할 호출되는 함수
    // 생성자 호출 => 객체가 생성되었구나 인지!!
    // 생성자 주 업무 : 객체 생성, 맴버 초기화
    // 특이점, this가 잘 보인다
    // this.nm : 맴버변수, 데이터
    this.nm = nm;
}
// 객체 생성 
// 함수 호출시 new가 들어가면 생성자함수로 인지함!!
// new는 객체를 생성하는 키워드!!
// const 객체명 = new 생성자함수( 인자 );
const person = new Person( 'JS' );
console.log( person ); // Person { nm: 'JS' } <= Person 객체로 표현(이름이생김)

// 프로토타입 확장 -> 객체 생성시 포함되지 않는다. 공용으로 객체간에 사용됨!!
// 객체에 변수, 함수 형태를 확장하는 방식
// 생성자함수명.프로토타입.확장할요소명 = 변수|함수|...
Person.prototype.nm2 = '별명';
Person.prototype.getNm2 = function () {
    console.log( `${this.nm} ${this.nm2}` );
};
console.log( Person ); // [Function: Person]
console.log( person ); // Person { nm: 'JS' } , 객체 자체는 변동이 없어보임
// 확장된 요소 엑세스
console.log( 'person.nm2 => ', person.nm2 );
person.getNm2(); // 함수도 정상적으로 사용됨

// 결론
// prototype으로 함수를 확장하여 추가함
// 수십개의 객체가 동일하게 만들어줘도, 함수는 오직 1개만 서로 공유하면서 사용!!
// 쓸데 없이 동일한 기능을 가진 함수를 객체 생성할때마다 생성 하지 않는다!! 
//  => 메모리 효율

// 위의 4번 방식은 구조적이 않다. 개발하기 까다롭다 => 쉽게 만들어보자 => class
// 5. class