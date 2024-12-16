# 리액트 개요
    - 개발언어
        - Javascript
            - *.js
            - es next 문법 -> babel -> 호환코드( es5|es6) 변환 -> html에 포함되어 실행 (external)
            - 위의 과정 => 빌드(build)

        - TypeScript
            - *.ts
            - type + es next 문법 -> 트랜스컴파일 -> es next -> babel -> 호환코드( es5|es6) 변환
            - 위의 과정 => 빌드(build)
        
        - 문법의 범위
            - TS > ES Next > ES5
                - 상위 언어로 갈수로 수단의 문제임
            - 어떤 언어로 개발하던 결론(최종구동되는 코드)
                -> ES5 or ES6 임 <= 빌드 과정을 통해 완성됨
    
    - 제작사
        - meta (구 페이스북)
    
    - 현재 개발등 포지션
        - 전자정부프레임웍 채택
            - https://github.com/eGovFramework/egovframe-template-simple-react
        - 기타 사용 빈도
            - https://trends.stackoverflow.co/?tags=angular,vue.js,reactjs,jquery
                - 현재 1위 react (점유율)
            - https://tsh.io/state-of-frontend/
                - 트랜드및 같이 언급되는 기술
                - react/next.js
                    - next.js는 reat기반으로 백엔드 구성할 수 있다
                    - typescript 형태로 주로 개발됨
    
    - SPA
        - Single Page Application
            - html 1개 존재
            - 사용자 인터렉션에 맞춰 화면갱신(페이지 변환(라우팅), 동적구성) 
                - 특정 요소를 타겟으로 다양한 비즈니스를 랜더링, 처리
                - 유저 입장에서는 10개의 화면-> 개발관점은 1개의 html일뿐
            - 프레임웍
                - react > angulra , vue(최근 중/대기업에서 찾기는함) 
                - vue는 앞선 기술을 기반으로 발전
    
    - 특징
        - react 사용이유
            - 개발자 가장 많다!! -> 서적, 참고자료, 등등 가장 많다!!
            - 강력한 스펀서 (메타)
            - 웹, 앱(react native), PC기반(electron 활용)
            - .... 
        - 기술적
            - 페이지 전환 : 라우팅
            - 페이지간 데이터 공유
                - 명시적 단방향 관리(순환구조)
                    - 복잡하지만, 명확하다!!
                - <->vue는 양방향 관리, 자유도 높다
            - JSX(Javascript XML) 지원
                - html + js를 결합한 구조
                - 화면 구성, 내용, 인터렉션형태 
            - 강력한 서드파트 라이브러리, 이식성 강함(공통)
                - npmjs.com
            - 훅
                - 해당 개념이 도입 => 객체지향적에서 `함수지향적`으로 전환
            - ...
                - 앱(웹)을 구성하는데 필요한 모든 생태계 준비되 어있다
                    - npmjs.com 에서 검색
    
    - history
        - 2010 ~ 15
            - 개발 시도 -> 페이스북, 인스타그램 적용시도
            - 애플의 앱규제 적책이 트리거!! -> 자체적인 플랫폼 필요!!
            - html5, css3, js발전등 
            - 실패
            - 인스타그램 인수후 적용시
                - 웹으로 개발 목표 -> 리액트,  JSX 등 개념
        - 2016이후
            - 인스타그램 적용
            - 넷플릭스 적용 -> 프런트앤드 시장 확산
        - 국내
            - TOSS, 카카오, 네이버, 네이버지도,... 
                - 2020이후 많이 회사 채택
                - react + django 많이 사용 <= JS, 파이썬
            - 지도플랫폼 대부분 적용

# next.js
    - react기반 개발
    - 기존 프런트엔드는 CSR 중심
    - next.js를 도입 => SSR을 사용할수 있게 지원
        - 유사 제품도 많음
    - react/next.js
        - 스프링부트와 next.js 는 충돌점이 많음!!
        - 차후 프로젝트 사용시  next 사용한다면, 포지션 정리필요!! 
    - 차후 문제

# 개발 환경 구축
    - 공식 공홈
        - react.dev
            - The library for web and native user interfaces
            - 웹 프런트엔드 - react or reactjs 
            - 앱(스마트폰:ios, android) - react native
            - 학습, api 문서 제공, 개발의 권장 방식 지원 x(자유롭게)
                - API 개선, 추가된방향성 -> 함수지향적
    - 개발 환경
        - 온라인 플랫폼
            - https://codepen.io/pen
            - https://codesandbox.io/p/sandbox/new?file=%2Fpublic%2Findex.html%3A15%2C56
            - https://stackblitz.com/edit/react-jsztca?file=src%2FApp.js

        - 로컬 환경
            - (*)html내에서 묘사 <=환경/방식 익숙하게 하는 장치
                - CDN방식 설치 -> 실제 개발 x
                ```
                    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
                    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                ```
            - (*)nodejs기반 react 웹구성 <= 최종형태
                - npm방식 설치

# basic-cdn
    - html 기반에서 cdn 방식으로 react 설치
    - 기본적인 react 구동 매커니즘 이해
    - React Developer Tools 설치
        - https://react.dev/learn/react-developer-tools
        - 크롬
            - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1
    
    - 리액트 구동 매커니즘 이해
    - 커스텀 컴포넌트 구성
        - 함수형, 객체형
        - props, state, 이벤트 처리
        - 화면갱신 매커니즘 (상태변수 업데이트 -> 화면갱신)
    - JSX 구성 규칙
        - html은 소문자, 커스텀 컴포넌트 첫글자 대문자
        - 루트 필요, 오버랩x (태그가 어긋나게 겹쳐진경우)
        - ();...

# app-npm
    - 약식
        - cmd 구동
            - PS 사용시 PSSecurityException 발생될수 있음
            - PS를 관리자모드로 구동
                ```
                PS C:\WINDOWS\system32> Set-ExecutionPolicy RemoteSigned

                실행 규칙 변경
                실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행
                정책을 변경하면 about_Execution_Policies 도움말
                항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안
                위험에 노출될 수 있습니다. 실행 정책을 변경하시겠습니까?
                [Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)
                [S] 일시 중단(S)[?] 도움말 (기본값은 "N"): y
                ```
        - npm i create-react-app -g
            - 1회만 진행
        - 프로젝트 위치 이동 
            - cd ~\frontend\react\app-npm <= 적당한경로
        - npx create-react-app demo
            - 프로젝트 생성
            - 않되는 경우
                - 맥 > sudo 명령어...
                - node -v => 14이상 체크
                - npm -v => 5.2이상 체크
                    - nodejs 재설치
                    - npm install -g npm                
        - cd demo
            - 프로젝트 이동
        - npm start
            - 프로젝트 실행

# app-npm
    - 리액트를 이용하여 frontend 앱(웹)을 구성하는 방식
    - nodejs 기반
    - npm : nodejs의 패키지 관리자
        - yarn 제품도 사용
        - 타언어/OS
            - 맥 : brew
            - 리눅스 : apt
            - 파이썬 : pip, conda
        - 용도
            - 패키지 설치 (가장 기본)
    - 리액트 앱을 기본적으로 생성하는 제품
        - 구동 방식 CLI(commnad line interface) 방식
        - create-react-app
            - https://www.npmjs.com/package/create-react-app
            - 설치
                ```
                    # i =>  install
                    # -g => global, OS 어디서던 create-react-app 사용가능
                    # PS에서 설치 PSSecurityException 조치 필요
                    # CMD에서 실행
                    npm i create-react-app -g
                ```
            - 사용이유
                - 기본 프로젝트 뼈대가 간결하다!!
                - 차후, 좀더 많은 기능이 들어간 보일러플레이트 사용
                    - 기본 프로젝트 구조, 명려어(빌드포함), 포멧터,...
        
    - 프로젝트 생성
        - 적절한 위치로 이동
            - ~\frontend\react\app-npm
        - npx create-react-app demo
            - 맥 : sudo npx create-react-app demo

    - 프로젝트 구동
        - cd demo
        - 실행
            - npm start
            - 허용(1회성)
        - 중단
            - ctrl + c
        - react 버전이 19로 업그레이드 되면서 설정에 약간 문제 발생
            - create-react-app의 관리문제
            - 조치
            - package.json
                ```
                    ...
                    "dependencies": {
                        ..                        
                        ,"web-vitals": "^4.2.4" <= 추가함
                    },
                    ...
                ```
            - 패치지 수동 설치 (현 프로젝트 폴더 내)
                - npm install

    - 프로젝트 구조
        - 구조 확인 명령
            - tree /f 
        ```
        /
        ├─ node_modules    : 프로젝트에 필요한 라이브러리 위치
        │                  : npm install 명령후 설치됨
        │                  : (여기서는 자동설치), git업로드x
        ├─ .gitignore      : git(형상관리)에 업로드시 무시되는 
        │                  : 파일 기제. node_modules는 반드시 추가
        ├─ (*)package.json    : 프로젝트에 대한 메타 정보 기술
        │                  : 명령어, 메타정보, 라이브러리등 기술
        │                  : 프로젝트 체크시 가장먼저 검토
        ├─public
        │      favicon.ico
        │      (*)index.html  : SPA관점에서 1개의 html이됨
        │      logo192.png
        │      logo512.png
        │      manifest.json
        │      robots.txt
        │
        └─src
                App.css     : 커스텀 컴포넌트의 css
                App.js      : 커스텀 컴포넌트(관습적, 첫글자 대문자)
                          : App.js or App.jsx <-> App.ts or App.tsx
                App.test.js : 단위 테스트용
                index.css   : 메인 css
                (*)index.js    : react 메인코드, 기본구성
                logo.svg
                reportWebVitals.js
                setupTests.js
        ```

# package.json
    - nodejs 계열 프로젝트 구조중 가장 먼저 체크!!
    - dependencies : 써드 파트 라이브러리
        - npm install  명령에 의해 설치
        - creat-react-app은 자동으로 npm install 처리됨
        - 라이브러리 설치        
            - 목표 : dependencies 기술, 설치
            - 위의 목표를 명령어 1번에 수행 가능함
                - 차후 라이브러리 추가시 적용
        - 샌드박스 모델 => 외부에서는 사용 불가!!

    - scripts : 명령어
        - 개발 예시
            - 기술내용 => "start": "react-scripts start",
            - 실제사용 => npm [run] start

        - 빌드(배포용생성) 예시 
            - "build": "react-scripts build"
            - npm run build
            - 프로젝트 내부에 build 폴더 생성 -> 배포파일
                - 정적 데이터로 구성된 파일
                - *.html, *.css, *.js, 리소스, 폴더
                - 백엔드에 배포, 단독서버구동시 배포용


# ES Module (ESM) 방식
    - 프로젝트 생성 (node 프로젝트 기본 절차)
        - 원하는 작업 폴더 이동
            - mkdir esm
            - cd esm
        - 프로젝트 생성
            - npm init
                - package.json 생성과정 
                    - 질의 => 엔터 
        - 개발
            - *.js 생성
        - 응용
            - 위의 과정을 한개의 명령어 모두 처리 + 필요한 파일(템플릿) 제공
            - ex) create-react-app, ... or 보일러플레이트(git에 등록된 리소스)
        
    - 모듈(*.js) 가져오기
        - 목적
            - 다른 개발자가 만든 모듈을 내가 작성 하는 코드에 가져와서 사용
        - 문법
            - (*)ESM, CJS 존재
    - node = 모듈 + 디렉토리(같은 유형의 모듈을 묶어둔 그룹, 패키지라고 부르기도 하지만 뉘앙스는 다름)
    
    - ESM 문법 (가져오기)
        - import App from '모듈의이름|상대경로+커스텀모듈';
            
            - 모듈의이름 : 써드 파트 모듈, npmjs에서 검색되는 모듈
                - from 'react'; <= 써드파트 모듈중에 react에서 ..

            - 상대경로+커스텀모듈 : 직접 만든 모듈
                - from './App' <= 현재 작성중인 코드와 같은 경로에 있는 App.js를 찾아서(출처)

        - import App
            - 가져온 모듈을 특정 이름으로 대체한것임(임의의 이름)
            - 예시
                - import App from './App';
                - import App2 from './App';
                - import App3 from './App';
            - 통상
                - 파일명와 동일하게 구성
                - 대표 모듈명
        
        - import { A, B, c  } from './Xxx';
            - 개별 모듈 가져오기
            - 출처에서 모듈화된 개별 모듈을 가져오는 표현
    
    - ESM 문법 (모듈화)
        - 대표 모듈
            - export default App;
                - 코드 가장 마지막줄에 표현(통상)
                - export default 컴포넌트명;
            - 기타 표현은 내일 체크
        - 개별 모듈
    
    - 실습
        - 현재위치 ~/react
        - mkdir esm
        - dir(명령프럼프트) or ls(파워쉘, 맥-터미널)
        - cd esm
        - 화면청소
            - cls(명령프럼트프) or clear(파워쉘, 맥-터미널)
        - node 프로젝트 생성
            - npm init
                - package.json 생성을 위한 질의 진행 -> 엔터!!
        - 코드 작성
            - index.js
            - mod.js
        - 구조
            /esm
            L index.js      : esm 방식으로 모듈 가져오기 표현
            L mod.js        : esm 방식으로 모듈화 표현
            L package.json


# 컴포넌트의 라이프사이클
    - 목적
        - 컴포넌트의 생애주기 이해
        - 객체형 컴포넌트 사용 (여기서만 테스트 가능함)
        - 함수형 컴포넌트는 사용 불가
            - 16버전 이후 추가된 `훅`에서 대체 처리 가능
    - 구조
        - App.js에 LifeCycle 컴포넌트를 모듈 가져오기를 하여 추가
    - 구성
        - ~/src/LifeCycle.js 생성


# 커스텀 컴포넌트 구현
    - npm 기반
    - ~/src/MyInput.js 생성
        - input 태그를 커스텀 하여 특정 기능을 가진 입력요소구성
        - 객체형 컴포넌트로 구성
    - 기본 형태
        ```
            // 1. 모듈 가져오기
            import React, { Component } from "react";

            // 2. 커스텀 컴포넌트 구현 ( (*)객체형 | 함수형 )
            class MyInput extends Component {
                constructor(props) {
                    super(props);
                }
                render () {
                    return (
                        <>
                        </>
                    );
                }
            }
            // 3. 커스텀 컴포넌트의 대표 모듈화
            export default MyInput;            
        ```
    
    - ~/src/MyCheckBox.js 생성
        - MyCheckBox.js
        - 체크박스 표현
    
    - ~/src/MySelect.js 생성
        - MySelect.js
        - html에서 여러 항목중 선택 담당 요소
            ```
                <select>
                    <option value="선택값">서울시</option>
                    <option value="선택값">부산시</option>
                </select>
            ```


# 훅(hook)
    - 리액트 16에서 추가된 기능
    - 함수형 컴포넌트에 훅이 추가 => 리액트 개발 방식 전환
    - 훅
        - 함수형 컴포넌트에 객체형 컴포넌트의 기능을 비슷하게 대체처리
        - 생애주기함수(함수형 x) 훅을 통해 대체처리
    - 종류
        - 제공되는 기본 훅
        - 커스텀 훅 => 대부분 라이브러리에서 응용

    - 프로젝트 새로 생성
        - 프로젝트명 : hook-test
        - 방식 : npm
        - 위치 : ~/react/app-npm/hook-test
        - 구성 실습 2분
        - 생성절차
            - 현재 위치 : ~/react/app-npm/
            - npx create-react-app hook-test
            - package.json
                - ,"web-vitals": "^4.2.4" 추가
                - cd hook-test
                - npm install
                    - npm -v : 버전 체크 = 10.9.0
                        - 5.x.x 이상부터는 npm install 모듈 진행하면
                        - package.json에 dependencies 파트에 자동으로 삽입된다
                            - 과거 npm install 모듈 --save
            - npm start

# hook-test
    - 훅 연습
    - 함수형 컴포넌트 연습 => 세션1 프로젝트의 프런트엔드 최종 개발 형태
    - 기본 형태
        ```
            // 1. 모듈 가져오기
            import './App.css';
            import {
                useState,       // 상태변수->화면갱신
                useEffect,      // 중요한 생애 주기 함수 대체(부분)
                useMemo,        // 데이터     
                useCallback,    // 함수
                useRef,         // 데이터, 변경되어도 랜더링 되지 않는다, 참조
                useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리    
            } from "react";

            // 2. 대표 모듈화 + 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
            //export default function App ( props ) {
            // or
            export default const App = ( props ) => {
                return (
                    <div className='App'>
                        <div className='App-header'>
                            작성
                        </div>
                    </div>
                );
            }            
        ```

# 기타
    - (*)네트워크 처리 -> 통신, ajax ( fetch, axios )
    - 라우팅 -> 페이지 이동, 페이지간 데이터 전달
    - (*)페이지간 데이터 공유, 관리 -> 1세대:redux ~`3세대`:??
        - 전역적 데이터(상태) 관리
        - 상위 컴포넌트 -> 하위컴포넌트 공유 useContext
        - 관계(없는) 컴포넌트가 동일한 데이터를 바라보고, 컨트롤, 업데이트 등등 처리 
          (공유) => flux => redux(1세대) -> mobx(2세대) -> zustand(3세대) : 써드파트 라이브러리
                 => 기본 개념 유사 => 사용의 편의성 문제!!
            - zustand
                - state-management solution (전역적(모든위치에서) 상태 관리 솔류션)
                - useReducer 사용하는 방식과 유사함!!
            - 실습 
                - ~/src/state/*.js 작성
            - 설치 
                - npm install zustand
                - npm|yarn|...

    - (*)템플릿 적용 -> UI, 디자인
        - 대시보드 + 게시판, 게산기등 서브페이지로 세팅
        - 머터리얼 디자인 (안드로이드폰에 적용된 디자인)
            - mui.com
            ```
                # package.json 수정 => 버전 이슈

                "dependencies": {
                    "@emotion/react": "^11.13.3",
                    "@emotion/styled": "^11.13.0",
                    "@mui/icons-material": "^6.1.1",
                    "@mui/material": "^6.1.1",
                    "@testing-library/jest-dom": "^5.17.0",
                    "@testing-library/react": "^13.4.0",
                    "@testing-library/user-event": "^13.5.0",
                    "@toolpad/core": "^0.10.0",
                    
                    ...
                    
                    "react": "^18.3.1",
                    "react-dom": "^18.3.1",
                    ...
                },

                # 수정후 저장 => npm install
            ```
            - 설치않되는분들
                - npm install @mui/material @mui/icons-material @emotion/react @emotion/styled --legacy-peer-deps 
                - 위 명령어로 직접 설치
    - (*)커스텀 훅    
        - 많은 개발사에서 자체 개발로 사용중 (자체 라이브러리 개발용)
        - CusHook.js, useWindowInfo.js
    - (*)useReducer
    - (*)다양한 CSS 적용
        - CSS 직접 적용
        - CSS Modules 방식
        - 써드파트 라이브러리 (선택적!!)
            - css styled-components 방식
            - emotion 라이브러리 적용 (mui 컴포넌트가 emotion 사용)
            - tailwind 라이브러리 적용
                - 'px-2 py-1 bg-red hover:bg-dark-red'
                - 스타일을 나열하듯이 작성하여서 표현, 용어는 재구성되어 있음
                    - bg-red => backgroundColor:red
                - https://www.npmjs.com/package/tailwind-merge
                    - 참고
            - *.scss|sass (Sassy CSS)
                - npm install scss sass
                - npm install resolve-url-loader sass-loader --save-dev
                    - --save-dev 개발할때만 사용, 빌드시 제외하는 라이브러리
            - ...
        - 실습 
            - ~/src/css
    - 빌드 -> 최종 형태!! -> 단독서비스<->백엔드 혹은 백엔드 포함

# (*)라우팅
- 리액트의 페이징 처리
    - URL을 요청하면 -> 특정페이지가 처리되게 구성
    - react-router-dom => react-router
        - https://www.npmjs.com/package/react-router-dom
        - https://github.com/remix-run/react-router
        - https://reactrouter.com/start/library/installation
        - 개발 세팅 페이지로 이동
- 프로젝트 생성
    - 현재 디렉토리 : ~/app-npm
    - npx create-vite@latest
        - create-vite <-> create-react-app : 프로젝트 생성하는 템플릿 모듈
        ```
            √ Project name: ... route-app  <= 프로젝트명 입력
            √ Select a framework: » React  <= 타겟 플랫폼
            √ Select a variant: » JavaScript + SWC <= 개발언어 + 트렌스컴파일러
                - SWC <-> Babel(지난주까지 주력으로 사용, 빌드시 사용됨)
                - Speedy Web Compiler, 속도, 성능에 초점을 맞춘 컴파일러(빌드 도구)

        ```
    - cd route-app
    - npm install
        - package.json에 설정된 독립모듈 설치 
    - npm i react-router
        - 별도 라우트 모듈 설치    
    - npm run dev
        - 개발된 내용 실행 명령
    - vite
        - 프런트 엔드 빌드 툴
        - SWC와 연계하여 작동
        - 개발 서버 가동, 수정시 빠른 재가동(반영)
        - TypeScript/Next.js => vite를 사용

    - 구조
        - 

- 빌드 -> 최종 서비스 형태
    - 현재 프로젝트 폴더 내에서 진행
        - npm run build
        ```
            ✓ 38 modules transformed.
            dist/index.html                   0.53 kB │ gzip:  0.43 kB
            dist/assets/index-n_ryQ3BS.css    1.39 kB │ gzip:  0.71 kB
            dist/assets/index-Cy6zQM6m.js   179.59 kB │ gzip: 59.28 kB
            ✓ built in 1.02s
            PS C:\Users\edu\Desktop\workspa
        ```
    - 최종 결과물
        - dist
            L index.html
            L 리소스
            L assets
                L *.js
                L *.css

# ADV => 고급
    - TypeScript 업그레드
        - 나중에 자료실 업데이트
    - Next.js 이식
        - 샘플 제공

# 기본형
    - 함수형 컴포넌트 사용
    - 프로젝트 템플릿 
        - npx create-vite@latest 에서 진행
    - 절차
        - 요구사항 맞게 페이지 배치
        - 개별 페이지에서 요구사항 구현
            - 훅 중심사용
                - useState, useEffect, useRef를 기본사용
            - 통신 axios 정도 사용
    
    - 기타
        - 페이지가 계속 이어지면서(예약/뱅킹/회원가입 서비스등) 데이터를 
          화면별로 들고 있어야 한다면 -> 전역상태관리 필요!! zustand