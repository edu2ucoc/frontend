/**
 * - 사용자 정의 select 구현
 * - option 동적 구성
 * - select 상에 기본 선택값 구현 -> initValue
 *      - 상태변수 사용!!
 * - 상태변수 변경!! -> 완성
 */
// 1. 모듈 가져오기
import React, { Component } from "react";

// 2. 커스텀 컴포넌트 구현 ( (*)객체형 | 함수형 )
class MySelect extends Component {
  constructor(props) {
    super(props);
    // 10-3. 상태 변수 초기화
    this.state = {
        selLanguage:this.props.initValue // 컴포넌트 사용시 세팅값
    }
  }
  render() {
    // 10-1. 데이터 획득 (props) 
    const { languages, initValue } = this.props;
    console.log( languages ); // 배열임을 확인
    
    // 매우 빈번하게 등장하는 패턴!!
    // 10-2. 배열 데이터 => map() => 새로운 JSX를 리스트로 구성 =>타 JSX 반영
    const options = languages.map( (language, idx)=>{
        // 동적으로 데이터 + JSX 결합하여 반환 -> 새로운 배열 생성
        return (
            <option value={language} key={idx}>{language}</option>
        );
    } );

    // 10-4. 상태 변수 사용-추출
    const { selLanguage } = this.state;

    // 10-5. 상태 변수 업데이트
    const onChangeHandler = e => {
        // 사용자가 선택한 값으로  select 선택값 변경
        // 선택 => 변경 => 상태변수 변경 => .. => render() => 화면갱신
        this.setState( { selLanguage:e.target.value } );
    }
    return (
        <div>
            {/* 더미 표현, 사용자 선택을 `입력` */}
            <select>
                <option value='서울'>서울</option>
                <option value='부산'>부산</option>
                <option value='제주'>제주</option>
            </select>
            <br/>
            <br/>
            {/* 
                커스텀 컴포넌트활용하여 select를 커스텀 
                - 요구사항, MySelect의 컴포넌트로 전달된 props에 
                  languages를 이용하여, 
                  select 구성 아래가 같이 나오도록 (결과 예시)                  
                - 코드를 작성하시오 실습 5분
                - 구성
                    - 반복적인것은 변수로 동적 생성
                        - 반복 -> for -> 데이터가 배열이므로 => map()
            */}
            {/* <select>
                <option value='자바'>자바</option>
                <option value='자바스크립트'>자바스크립트</option>
                <option value='리액트'>리액트</option>
            </select> */}
            
            {/* 10-4. 상태 변수 사용-실사용 */}
            <select value={ selLanguage } 
                    onChange={ onChangeHandler }
            >
                { options }
            </select>
        </div>
    );
  }
}
// 3. 커스텀 컴포넌트의 대표 모듈화
export default MySelect;
