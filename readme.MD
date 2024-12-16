# 기본준비
    - 구글 계정 하나 준비
    - github.com/노션 가입

# 웹서비스의 이해(workflow)
    - 웹 이용
        - 1. 브라우저(크롬,에지,사파리,..) 오픈
            - PC
            - 모바일(스마트폰)

        - (*)2. 원하는 서비스 이용
            - 주소창에 도메인입력 (https://www.coupang.com/)
                - 엔터(행위 -> `요청(request)`)
            - 검색 -> 검색결과 클릭 -> 진입(`요청`)

        - 3. 내부적인 요청 처리
            - 3-1. DNS(Domain Name System) 조회
                - www.coupang.com => 92.132.44.13 (IP 주소로 변환)
                - 요청을 이어감
            - 3-2. 서버와 연결 설정
                - TCP/IP 기반
                    - 프로토콜을 기반해서 용어가 정의
                    - 프로토콜 : 통신규약, ..
                        - 웹은 어떤 프로토콜으로 통신하는가?
                        - http or https
                - `클라이언트(브라우저) <-> 서버(서비스 제공 주체)`
                    - 서버는 어디에 위치?
                        - 과거(레거시) : 자사내부(온프레미스), IDC 센터
                        - 현재 : 클라우드 서비스내에 특정 존에 존재(분산)함
                            - 클라우드는 전세계 여러 데이터센터에 존재할 수 있다
                            - aws, azure, google cloud
                    - IP를 통해서 서버를 찾아간다!!
        
        - (*)4. 서버측 요청 처리
            - 클라이언트의 요청 도착
            - 요청 해석 -> 누가 처리할것이지? -> 특정한 대상으로 요청 넘김
                - 라우팅 => 백엔드포지션 스프링부트에서 확인
            - 처리
                - 로그인 처리: 클라이언트가 보낸 ID/pw 획득,   
                - 조회 : 데이터베이스 접속, 쿼리, ..
                - 다양한 비즈니스 업무 처리
        
        - (*)5. 응답 (Response)
            - html + css + javascript 을 구성하여 응답
                - 웹 페이지
            - xml or json(데이터포멧, 반정형데이터)으로 구성하여 응답
                - restful, 오픈 API로 응답받는 형식
                - 화면 x
                - 내부적으로 사용(혹은 백단에서 사용)
        
        - 6. 응답 데이터 클라이언트에게 전송
            - 클라이언트 <-> 서버 연결되어 있으므로 가능
            - http|https
        
        - 7. 브라우저 랜더링
            - 응답 데이터 -> 파싱(해석, 메모리로드) -> 화면처리(랜더링)
            - 사용자는 브라우저를 통해서 결과를 확인한다!!
            - 여기까지 처리시간 0.x초
        
            
    - 웹서비스 구조 (3-tier)
        - 프런트엔드
            - html + css + javascript
                - 사용자가 `브라우저`를 통해 만나는 서버의 응답 결과
                - 구성
                    - html5 : 구조(뼈대), 콘텐츠포함
                    - css3 : 레이아웃, 디자인, 반응형, 애니메이션
                        - 반응형:PC용, 모바일용 동시 처리?
                    - javascript : 인터렉션(사용자<->브라우저, 상호작용), 이벤트, 통신, 동적화면구성
                        - typescript
            - 2012~15 
                - javascript -> 크롬브라우저(2007~8) -> v8엔진 공개 ->  nodejs 등장 -> js가 주력 언어로 도약
                - SPA(Single Page Application) 개념 등장, 개발(플랫폼) 
                    - Angularjs(구글) -> `reactjs(메타)` -> vuejs(커뮤니티)
                    - 1개 페이지내에서 랜더링만 처리하여 새로운 화면을 구성할수 있다면 => 더 빠른 서비스 제공할수 있지 않을까?
                    - 예시
                        - 대시보드(실시간처리), 지도기반서비스, 넷플리스, 신규 서비스(데이터분석등등) ,.. 적용중
        - 백엔드
            - `웹서비스`를 제공하는 s/w
                - 프로젝트의 목적 => 웹서비스!!
            - 개발언어 중심 분류
                - `자바(oracle)`
                    - servlet -> jsp, ejs -> Spring -> `SpringBoot`
                    - 전자정부프레임웍 : Spring, `SpringBoot`
                    - 기업체(엔터프라이즈급, 중/대형) 많이 사용
                - 파이썬
                    - django(국내) , flask(북미), fastapi(가장 빠르다)
                    - 데이터분석, 머신러닝/딥러닝, 생성형AI 활용한 서비스
                - C# (MS)
                    - asp -> asp.net -> .net
                    - 여행, 항공, 숙박 예약 (중대형 시스템)
                    - 윈도우서버를 기반으로 하는 서비스
                - javascript/typescript(node 기반)
                    - nodejs(백엔드)
                        - expressjs
                        - react-> nextjs,...
                    - spa(프런트)
                        - angularjs
                            - 유투브,..
                        - `react`
                            - 국내 많이 사용중
                            - 전세계적으로 비중이 높다
                        - vue
                            - 확산되고 있다!!
                - php
                    - php ~ 
                    - 소형 기업, 개인프로젝트등 많이 사용

        - 데이터베이스
            - 데이터를 저장하는 저장소, ..
            - 종류
                - RDB : 관계형 데이터베이스
                    - `Mysql`, Mariadb, aws 오로라, postgre
                    - ms-sql
                    - Oracle
                    - ...
                    - 기존의 시스템의 데이터 저장에 적합
                - NoSQL
                    - mongoDB
                    - redis
                    - ....
                    - 로그, 비정형데이터등등 빅데이터 저장쪽에 적합

    - 프로토콜

# 자바스크립트
## 개발 환경 구축
    - nodejs 설치
        - https://nodejs.org/en
        - Node.js® is a free, open-source, cross-platform JavaScript runtime environment
        - js를 개발하고 구동시키는 환경을 제공
    
    - IDE (개발 통합 환경)
        - vscode 설치
        - https://code.visualstudio.com/
        - 경량, 대부분의 언어 지원(범용), git지원(형상관리), ...
        - 강력한 extension 지원

## vscode extension 설치(개발 도움)
    - code runner
        - js 코드를 작동시 내부에서 바로 실행가능하게 버튼 제공
    - live server
        - html 코드를 가상 서버를 가동시켜서 작동(확인)
    - prettier-code formatter
        - 포멧터
        - 팀내에서 동일한 스타일의 코드를 유지보수
    - auto rename tag
        - 태그명 변경시 자동으로 닫기 태그가 수정되는 기능
    - meterial icon theme
        - 꾸미기 (아이콘을 통해 각 파일/디렉토리 표현)

## Javascript 언어
    - 개요
    - 언어 기본
    - 타입
    - 변수
    - 연산자
    - 형변환
    - 흐름제어 : 조건문, 제어문, 반복문
    - 함수
    - 클레스, 객체
    - 최신문법

# Git & GitHub 기본 사용
- 개요
    - 형상관리시스템
        - (*)git, svm, ....
        - 소스관리, 소스 변경 내역 확인, 어디서든 작업 가능(백업 필요 X, 병행필요)
        - github는 git을 지원하는 대표적인 사이트 -> MS가 인수, 대부분 개발자 사용
            - 웹, 앱 기반으로 관리
            - gitAction을 이용하여 CI/CD를 활용 (지속적 개발/배포) => DevOps 연결 <= 개발 문화 -> 취업시 사내에서 적용되는 시스템임
- 설치
    - Git 검색후 다운로드
        - https://git-scm.com/downloads/win
        - OS에 맞게 설치 : 64-bit Git for Windows Setup.
        - 설치 설정중에 기본 에디터 설정
            - visual studio code로 설정!!
        - git 설치 이전에 vscode나 터미널등 가동중이였으면 재가동후 사용 
            - git 인식됨

- 방식
    - 로컬 PC 개발 => git에서 관리하는 레포지토리에 저장 : 관리
        - 인증 (1회성)
            - 토큰 기반
                - 기기에 무관하게 git 사용 가능
                - 토큰 관리 주의
            - (*)기기 기반
                - 개인 엑세스 기반 인증
                - 특정 기기의 ssh값을 활용하여 등록
                - 터미널
                    - github 가입한 이메일
                        > ssh-keygen -t rsa -C "이메일"
                    - ssh-keygen -t rsa -C "edu2ucoc@gmail.com"
                        > 계속 엔터키 누르면 생성완료
                        ```
                            ....
                            Your identification has been saved in C:\Users\edu/.ssh/id_rsa
                            Your public key has been saved in C:\Users\edu/.ssh/id_rsa.pub
                            ...
                        ```
                    - C:\Users\edu/.ssh/id_rsa.pub 파일 확인
                        - .ssh는 숨김파일 => 보이게 처리
                            - 탐색기 > : 버튼 클릭 > 옵션 > 보기 > 숨김파일보기.... 체크
                        - id_ras.pub vscode로 드레그&드롭
                            - 내용카피
                
                - github에 등록
                    - 우측상단 프로필 > Settings > SSH ... > SSH Keys > New SSH Key 클릭 > 
                    - 제목 : 적당히 (window11-dev-ssh)
                    - 내용 : 내용카피 부분 붙여넣기
                    - 키타입 : 유지
                    - Add SSH Key 클릭

        - 로컬  PC  사용자 등록
            - git config --global user.email "본인 github 이메일"
                - git config --global user.email "edu2ucoc@gmail.com"
            - git config --global user.name "본인 github 이름"
                - git config --global user.email "edu2ucoc"


    - 개발 프로젝트와 github 연동
        - 기본 형태
            1. github에 저장소 생성
                - github.com 진입
                - New > 저장소의 이름 frontend > 설명 적당히 기입
                - 강사:public, 개인:private
                - 나머지 설정 X
                - CREATE REPOSITORY 클릭
            2. 로컬 PC에서 개발 시작
                - 2주간 진행, 최초는 프로젝트 생성후 바로 연결
            3. 로컬 PC의 프로젝트 와 github 연동(결)
                ```
                # 개발 -> 파일 생성됨

                # git 명령어
                # `로컬 저장소`를 만들고, 초기화 => .git 폴더 생성됨
                # 최초 1회만 진행, 만약 제거하면, 깨끗한 소스가됨
                git init

                # 저장소에 추가된 혹은 수정된 파일을 스테이징 해라!! -> 대상으로 지정
                # 현재 디렉토리에 존재하는 모든 대상 파일을 스테이징 해라!!
                # 단, .gitignore 파일 있다면, 제외되는 대상 파일을 보고 배제한다
                # changes <-> staged file
                # changes : 코드를 수정, 추가 하면 대상이됨
                # staged : git add xx => github 에 적용된 대상이 됨
                git add .
                
                # 커밋단계 : github(원격 저장소)와 동기하기전 최종 상태로 변경
                #           메세지 기입(규칙(나중에체크)에 맞게), 변동내용 정리
                # 로컬 저장소에 저장
                git commit -m "Feat: 프로젝트 최초 반영"
                 

                # 브런치의 이름을 main으로 변경 -> 필요시 1회만 진행
                # 브런치 -> 메인 개발 줄기, 모듈별로 브런치를 만들어서 작업 가능
                git branch -M main

                # 1회성, 로컬 저장소를 원격 저장소와 연결!!
                git remote add origin https://github.com/edu2ucoc/frontend.git

                # 푸시 : 로컬 저장소의 변경된 내용을 원격 저장소에 반영하라!!
                # push <-> pull
                # 명령어 실행후 github 로그인이 뜨면 => xxx browser 클릭 > 인증
                # 인증후 다시 명령어 실행
                git push -u origin main
                ```

            4. 형상관리진행
                - 개인
                    - 컴퓨터 구동
                        - 수정된 내용 로컬 저장소 기준으로 최신화
                            - git pull
                        - 작업 -> 수정, 신규추가
                            - git add .
                        - 커밋
                            - git commit -m "Feat: xx"
                        - 푸시 -> 원격 저장소 반영
                            - git push
                
