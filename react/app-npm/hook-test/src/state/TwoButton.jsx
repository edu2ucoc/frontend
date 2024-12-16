/**
 * 카운트 증감(액션, 행동)을 처리하는 2개의 버튼 컴포넌트
 *  - 값증가, 값감소하는 이벤트 발생
 */
import useStore from "./store";

export default function TowButton() {
    const { increment, decrement } = useStore(); // 액션 2개 획득
    return (
        <>
            <button onClick={ increment }>+1 증가</button>
            <button onClick={ decrement }>-1 감소</button>
        </>
    );
}