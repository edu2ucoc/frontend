/**
 * 예외처리
 *  - s/w 는 기본적으로 중단되면 않된다!!(백엔드)
 *  - 오류가 발생한다면
 *      - 오류를 잡는다(catch)
 *          - try ~ catch ~ finally
 *      - 오류를 던진다(throw)
 *          - throw 오류객체
 */

function makeError() {
    // js 는 0으로 나누기 허용함 => 타언어는 오류임
    console.log( 1/0, -1/0 ); // Infinity:양의무한대 -Infinity:음의 무한대
    // 오류를 임의로 생성해서 던지기
    throw new Error("임의로 발생시킨 오류");
}
// I/O 를 사용하는 코드 => 무조건 예외처리 진행!!
try {
    console.log(1); // 정상코드
    makeError();    // 잠재적으로 오류를 유발할수 있는 코드
    console.log(2); // 정상코드
} catch (error) {
    console.log('에러', error); // 에러 처리 코드
} finally {         // 정상적, 오류가 발생했던 => 무조건 진입 (뒷정리 코드)
    // 여기를 진입 => 셧다운 없음을 의미
    console.log(3); // i/o가 있었다면 => close() 처리
}