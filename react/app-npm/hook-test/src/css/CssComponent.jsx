/**
 * 여러 유형의 css 적용 스타일 컴포넌트
 */
// 스타일 2번 사용을 위한 모듈가져오기
//import myStyle from "./index";
import { styled } from "@mui/material";
import myStyle from "."; // 이름이 index이면 .으로 표현 가능함

// 스타일 3번 : css styled-components 방식
// npm i styled-components
import styled_com from 'styled-components';

// 위치조정 => 스타일 4 css 작성하는 방식을 새로운 문법으로 구성하는 스타일
// scss, sass
import './styles.scss';

// Title이라는 컴포넌트를 생성, 스타일을 가지고 있다
const Title = styled_com.h2`
    color:red;
`
// Button이라는 컴포넌트를 생성, 스타일을 가지고 있다, 문법만 다르게
const Button = styled_com.button({
    color:'gray',
});



export default function CssComponent() {
    return (
        <div>
            <h3>CSS 적용 테스트</h3>
            <div style={{ backgroundColor:'lightgray', 
                          margin:'1em', padding:'1em' }}>
                스타일 1, 직접(inline) CSS 적용
            </div>
            <div style={ myStyle.styleDiv }>
                스타일 2, CSS Modules 적용 방식
                CSS를 별도의 JS로 구성하여 스타일 적용
            </div>
            <div>
                <Title>스타일 3, css styled-components</Title>
                <Button>스타일드 버튼</Button>
            </div>
            <div className="title">
                스타일 4, scss, sass 사용
            </div>

        </div>
    );
}