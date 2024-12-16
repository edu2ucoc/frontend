/**
 * 모듈화 하여 다른 JS가 사용할수 있게 구성
 *  - 1개의 JS에서 모든 내용을 구현할수는 없다 => 모듈화 필요
 *  - 필요시 재사용성, 여러 JS에서 참조하여 사용 가능해야함 =>모듈화필요
 * 
 * 특징
 *  - 일반적인 코드는 private 하다 => 해당 JS 내부에서만 사용가능!
 *  - ESM 모듈화 처리 => export or export default => 외부에서 사용가능
 */
// 1. 상|변수의 모듈화
export const a = "hi";

// 2. 함수의 모듈화
export function add(x, y) {
    return x+y;
}

// 3. 객체(5번 유형으로 표현)의 모듈화
export class Person {
    log() {
        console.log('Person log() call');
    }
}

// 4. 대표 모듈화 (표현이 2가지 존재)
// case 1
export default class Human {
    log() {
        console.log('Human log() call');
    }
}

// or
// case 2
// export default Human;