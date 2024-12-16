/**
 * 컴포넌트의 생애주기 확인
 *  - 컴포넌트의 내부 구동 매커니즘 및 워크플로우 이해
 *  - 객체형 컴포넌트 구성
 *  - 훅이라는 주제부터 함수형 컴포넌트로 전환
 *      - 훅을 통해서 생애주기와 비슷하게 처리할수 있는 기능제공
 *      - react 16부터 지원  => 함수형 컴포넌트로 개발 패더라임 전환
 */
// 1. 모듈가져오기
import React, { Component } from "react"; // react 모듈로부터 가져온다

// Component 는 개별모듈
// React는 대표모듈 ( export default XX; )
// 2. 클레스형 컴포넌트 구성
class LifeCycle extends Component{
    constructor( props ) {
        super( props );
        // 상태변수
        this.state = {
            r:Math.random() // 난수값을 상태변수로 세팅
        }
    }
    render () {
        const { r }= this.state;
        return (
            <>
                라이프사이클!! { r }
                <button onClick={ ()=>{
                    // 버튼을 누르면 -> 상태변수 업데이트 -> .. -> 화면갱신
                    this.setState( { r:Math.random() } );
                } }>상태 변경</button>
            </>
        );
    }
    // 생애 주기 함수 추가 -> 참고용!!
    // 1. 컴포넌트가 마운트 되기전 => 컴포넌트가 화면에 보이기 직전 타이밍
    componentDidMount () {
        // 재정의
        // 이런 타이밍에 뭔가 작업할게 있다면 사용, 없다면 미사용
        console.log('1. 컴포넌트가 화면에 보일려고 한다');
    }
    // 2. 컴포넌트가 마운트 된후 화면 갱신시 발생되면 호출
    //    화면 갱신 감지, 이 타이밍에 작업할것 필요하면 사용, 아니면 미사용
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        // 갱신되고자 하는 컴포넌트의 요소들이 전달!!
        console.log( '2. 변경되려고 한다 shouldComponentUpdate()', 
                    nextProps, nextState, nextContext );        
        return true;
    }
    // 3. 컴포넌트 업데이트 완료
    componentDidUpdate () {
        console.log( '3. 컴포넌트 업데이트 완료' );
    }
    // 화면갱신 워크플로우
    // 상태변수 수정 -> shouldComponentUpdate() 
    //              -> render() -> componentDidUpdate()

    // 4. 컴포넌트 마운트 해제-> 컴포넌트가 사라질려고 한다!!
    componentWillUnmount () {
        // 뒷정리 코드를 발동 -> 이벤트 해제, 리소스 해제등등 정리
        // 필요하면 구현
        // 라우트(라우팅처리)를 통해서 화면 전환 되면 그때 확인!!
        console.log("4. 컴포넌트가 사라질려고 한다!!");
    }

}

// 3. 대표 모듈화 구성
export default LifeCycle;