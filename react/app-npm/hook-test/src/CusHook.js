/**
 * useWindowInfo라는 커스텀훅을 사용하는 컴포넌트
 */

import useWindowInfo from './custom/useWindowInfo';

const CusHook = () => {
    const { width, height } = useWindowInfo(); // 커스텀훅
    return (
        <>
            <div style={{ margin:"2em"}}>
                <p>윈도우 크기</p>
                <p>{ width } px / { height } px</p>
            </div>
        </>
    );
}

export default CusHook;