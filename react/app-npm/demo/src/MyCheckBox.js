/**
 * 소스 붙여 넣기 이후 -> 자동 간격 맞추기
 *      => Ctrl + A => Ctrl(누른채로) K->F 연속입력
 */
// 1. 모듈 가져오기
import React, { Component } from "react";

// 2. 커스텀 컴포넌트 구현 ( (*)객체형 | 함수형 )
class MyCheckBox extends Component {
  constructor(props) {
    super(props);
    // 1. 상태변수 초기화
    this.state = {
        checked:false
    }
  }
  render() {
    // props 분해
    const { label } = this.props;
    // 2. 상태변수 사용-분해
    const { checked } = this.state;
    return (
        <div>
            {/* 선택여부를 상태변수로 저장 */}
            {/* 2. 상태변수 사용-실사용 */}
            <input  type     = 'checkbox' 
                    checked  = { checked }            
                    onChange = { ()=>{ 
                        // 이벤트 함수 직접 구현 -> 체크값 부정
                        this.setState( { checked:!checked } ) 
                    } }
            /> { label }
        </div>
    );
  }
}
// 3. 커스텀 컴포넌트의 대표 모듈화
export default MyCheckBox;
