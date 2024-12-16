/**
 * 카운터 값을 표현하는 컴포넌트2
 *  - 전역 상태 변수값 사용
 */
import useStore from "./store";

export default function View2() {
    // 전역 상태 관리 저장소에서 상태변수(여기서는 count)만 추출
    const { count } = useStore();
    return (
        <>
            {count}
        </>
    );
}