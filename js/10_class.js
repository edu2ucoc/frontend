/**
 * 객체 생성 방법중 es next 문법에 적용되는 class 기법
 *  - class라는 문법 형식으로 객체를 생성, 구현하는데 목적
 */

class Food {
    // 생성자 => 고정이름, 객체 생성, 맴버 초기화
    constructor ( name, age ) {
        // 멤버 => this. 으로 접근
        // 맴버변수(데이터)를 생성, 초기화
        this.name = name;
        this.age  = age;
    }    
    // 맴버메소드(함수), 개정 문법에서는 생략(function)
    info () {
        console.log( `${ this.name } ${ this.age }` );
    }
}
const obj = new Food( "JS", 33 );
console.log( obj ); // Food {} : Food 객체
// 맴버 접근 => 객체명.맴버
console.log( obj.name );
obj.info();

// 상속, 재정의 => 생략 => 자바, 스프링부트에서 확인