/**
 * CSS Module  전용
 *  - index.js라는 이름은 특정 디렉토리에 대표명이다(특수케이스),편의상 사용
 *  - js 문법으로 구성
 */
const myStyle = {
    styleDiv:{  // cas의 클레스와 동일한 의미
        // 내부 맴버가 CSS 의미를 가진다
        backgroundColor:'lightgreen',   // 배경색
        padding:5, // 내부 여백 (자식과 border 사이)
        margin:5,  // 외부 여백 (부모와 border 사이)
    },
    styleMargin:{
        margin:10,
    }
    // .....
}
export default myStyle;