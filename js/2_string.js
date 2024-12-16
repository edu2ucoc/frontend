/**
 * 문자열 처리
 *  - 타입
 *  - 표현 
 *      - '문자열'
 *      - "문자열"
 *      - ESNext 추가 (백틱 표현)
 *          - 템플릿 문자열 처리
 *          - `문자열` <-> 파이썬:'''...''' or """ ... """
 *          - 동적으로 문자열 구성 획기적 발전(포멧팅)
 *          - ` ${ 값 } ${ 값 } ` <= 포멧팅 가능
 */
// 문자열 변수 : '', "" 사용 확인
let name  = "js";
let name2 = 'ts';
console.log( name, name2);

// 섞어서 사용 -> 문자열로 취급
let name3 = '"ts"';
console.log( name3);

// 같은 기호 겹쳐서 사용 => 이스케이프문자(\문자) 활용
let name4 = '\'ts\'';
console.log( name4);

// 기존 표현의 문제점 -> 코드 복잡, 지저분, 해석 힘들, 오류 발생률도 높음
// 원래 문자열 <input type="text" id="id"...
// 수정 문자열 <input type="email" id="id"...
// 이렇게 수정하고 싶다면
let naverLoginHtml = '<input type="' 
                    + 'email' 
                    + '" id="id" name="id" accesskey="L" maxlength="41" autocapitalize="none" value="12월" title="아이디" class="input_id" aria-label="아이디 또는 전화번호">';
console.log( naverLoginHtml );

// 해결 -> ``
// 구조 유지/여려줄/포멧팅, 포멧팅 지점만 ${ 값 } 대체 처리
let inputType = "email";
let naverLoginHtml2 = `
    <input 
    type="${ inputType }" 
    id="id" 
    name="id" 
    accesskey="L" 
    maxlength="41" 
    autocapitalize="none" 
    value="12월" title="아이디" 
    class="input_id" aria-label="아이디 또는 전화번호">
`;
console.log( naverLoginHtml2 );