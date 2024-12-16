/**
 * 여러개의 페이지 구성
 * - 프로젝트 가정
 *  - 홈페이지
 *  - 로그인, 회원가입 페이지
 *  - 기타 필요한 페이지, 페이지 요청시 데이터 전달
 */
// 1. 모듈가져오기
import { 
    useParams,  //페이지 요청시 데이터를 URL에 전달하면, 이를 받아서 추출하는 훅
    NavLink
} from "react-router";

// 2. 컴포넌트 구성
// /
export const Home = () => {
    return (
        <>
            <div>홈 페이지</div>
        </>
    );
}
// /about
export const About = () => {
    return (
        <>
            <div>About 페이지</div>
            <nav>
                {/* 통상 nav라는 네비게이션 용도 태그 내에서 사용 
                    - className 같은 class값을 이용하여 활성/비활성 표시 가능
                    - / -> /about 이동시 다시 돌아가는 링크
                    */}
                <NavLink to='/'>Home</NavLink> 
            </nav>
        </>
    );
}
// 인증 페이지 묶음 처리
// /login
export const Login = () => {
    return (
        <>
            <div>Login 페이지</div>
        </>
    );
}
// /register
export const Register = () => {
    return (
        <>
            <div>Register 페이지</div>
        </>
    );
}
{/* 인증 그룹, 필요시 스위칭하여 화면이 노출됨 */}
// /auth
export const AuthLayout = () => {
    return (
        <>
            <div>AuthLayout 페이지</div>
            <Login/>
            <Register/>
        </>
    );
}

// /dashboard
export const HomeExtend = () => {
    return (
        <>
            <div>대시보드 메인 홈페이지</div>
        </>
    );
}
// /dashboard/:city
// 동적 페이지(/:param), 상위/하위페이지로 URL 연결(URL에 경로 발생)
export const City = () => {
    // 동적으로 데이터를 URL에 전달하는 유형의 페이지이다!! (설정)
    // "/:city" <= 현재 컴포넌트를 동적 데이터가 있는 방식으로 URL을 설정했다면
    const { city } = useParams();
    return (
        <>
            <div>상세 페이지, 전달값={city}</div>
        </>
    );
}

export const Detail = () => {
   const { pid } = useParams();
    return (
        <>
            <div>상세 페이지, 전달값={pid}</div>
        </>
    );
}
export const Detail2 = () => {
    // 데이터가 없을수 있다(생략표현) -> 문제 없는지만 체크
    const { lang } = useParams();
    // 데이터 생략 => undefined로 정의 => 랜더링 x
    console.log( lang );
    return (
         <>
             <div>상세 페이지, 전달값={lang}</div>
         </>
     );
 }