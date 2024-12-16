/**
 * 비동기, 콜백헬, Promise, async ~ await
 *
 * JS의 실행 환경
 *  - 현재 nodejs 기반에서 JS를 가동중임
 *  - nodejs의 특징
 *      - `싱글 쓰레드` 기반으로 작동
 *          - 쓰레드는 프로세스를 쪼갠 작업단위
 *          - 강력한 포퍼먼스 발휘 => V8 엔진 => 크롬브라우저의 기본엔진
 *      - `넌블러킹` 작동 성질을 가짐
 *          - 코드가 진행될때, 결과를 기다리면서 대기하는 부분 x
 *          - 블럭하지 않고, 코드는 계속 진행
 *              - 결과가 꼬일수 있다 -> 비동기식 코드 <-> 동기식 코드
 *          - 참고
 *              - 동기식 코드
 *                  - 파이썬 -> 느리다!!(평가)
 *                      - 1번 라인이 완료되야, 2번라인이 실행됨!!
 *              - 비동기식 코드
 *                  - 1번 라인 실행 -> 2번라인 1번라인이 끝나지 않아도 바로 실행
 *                  - JS(nodejs기반) -> 빠르다 -> 단 싱크 조절(개발자가 알아서 맞춘다)
 *                  - 콜백함수로 해결함 -> 비동기적 코드를 동기적으로 조절
 *
 *  - 비동기 상황 발생 요인
 *      - I/O 상황이 대부분
 *          - (언어 작성된 )코드 <-> 외부리소스간에 통신시(딜레이를 동반함)
 *              - 외부리소스 : 디비, 네트워크, 파일, ... 코드 바깥쪽 자원
 *
 *  - JS는 콜백함수 형태로 이 상황을 해결했음
 */

// 파일 I/O  진행
// js <-> file : 연결 -> 읽고 | 쓰기 진행 -> 닫기
// JS가 file을 엑세스 => 외부라이브러리 사용 => 라이브러리 가져오기 표현
// nodejs 에서는 2가지방식 지원 (라이브러리 가져오기)
// 1. CommonJS (CJS) 방식 -> 초기 nodejs부터 지원, 여전히 사용 가능
//    nodejs 기반 백엔드 구성시 자주 사용
// 2. ES Module (ESM) 방식 -> ES Next에 의해 추가됨,  reactjs/vue등 사용
//    프런트엔드 구성시 자주 사용

// CJS 방식으로 파일 엑세스 라이브러리 획득
// fs: File System, nodejs의 파일 지원 모듈
const fs = require("fs");
// console.log( fs );

// 비동기 상황 연출
// 파일을 3개, 1.txt, 2.txt(큰 사이즈로 구성), 3.txt
class Test {
  // 생성자 -> new Test() 수행하면 생성자는 자동 호출됨!! -> 객체생성목표
  constructor() {
    // 상대경로, 현재 파일을 기준으로 경로를 체크
    //this.file1 = './data/1.txt';
    //this.file2 = './data/2.txt';
    //this.file3 = './data/3.txt';
    // 절대경로, 루트부터 해당 파일까지 절대적 경로를 사용
    // __dirname : 현재 파일의 디렉토리 경로를 절대경로로 제공
    // nodejs가 제공
    this.file1 = __dirname + "/data/1.txt";
    this.file2 = __dirname + "/data/2.txt";
    this.file3 = __dirname + "/data/3.txt";
    console.log(this.file1);
  }
  // 기존 방식 -> 비동기 고려 없이 작성
  // 문제점 -> 일관된 결과를 기대할수 없다 (순서 제각각)
  sample() {
    // 1.txt -> 2.txt -> 3.txt
    // 동기식으로 처리된다는 전제하에 진행
    // fs.readFile() 은 파일을 읽어서(언제가 완료되면) 등록된 콜백함수에 전달
    fs.readFile(this.file1, (err, data) => {
      console.log(this.file1, data);
    });
    fs.readFile(this.file2, (err, data) => {
      console.log(this.file2, data);
    });
    fs.readFile(this.file3, (err, data) => {
      console.log(this.file3, data);
    });
  }
  // 해결 1 -> 1번 결과받으면 2번진행 -> .. 순차처리
  // 처리시간이 길어진다, 자원을 다 사용 x, 단 해결됨
  // Dpeth가 깊어진다!! -> 코드가 길어진다면, 깊이도 깊어진다 => 콜백헬
  // 코드가 `>` 형태로 깊어지고 길어짐 => 콜백지옥
  // 콜백헬 => 유지보수(수정)가 힘들, 가독성 떨어짐
  normal() {
    // 1번 시도
    fs.readFile(this.file1, (err, data) => {
      console.log(this.file1, data);
      // 2번 시도
      fs.readFile(this.file2, (err, data) => {
        console.log(this.file2, data);
        // 3번 시도
        fs.readFile(this.file3, (err, data) => {
          console.log(this.file3, data);
        });
      });
    });
  }
  // 해결 2
  // Promise 패턴
  // 1. Promise 객체를 반환하는 함수를 구성
  // 2. 해당 함수를 이용하여 비동기 처리
  /*
        // 깊어지지 않게 사용 -> 가독성 상승, 모듈별 관리편리함
        함수()
        .then() // 필요한 만큼 비동기 처리 진행
        .then()
        .then()
        ...
        .catch()
        .finally()
        // nodejs, js의 라이브러리 검색 => npmjs.com
    */
  // 1. Promise 객체를 반환하는 함수 구성 -> 통상 만들 확률 없음
  //    fileName: 1.txt, 2.txt, ...
  es6PromiseDefine(fileName) {
    // resolve : 작업이 성공하면 호출하는 콜백함수(데이터 담아서)
    // reject  : 작업이 실패하면 호출하는 콜백함수
    return new Promise((resolve, reject) => {
      // 실직작업 => 파일읽기(비동기)
      fs.readFile(fileName, (err, data) => {
        if (err) reject(err); // 파일 읽기 실패
        else resolve(data); // 파일 읽기 성공
      });
    });
  }

  // 2. (*)사용
  es6PromiseUse() {
    // 맴버 사용시 소속(this or 객체명).맴버
    this.es6PromiseDefine(this.file1)
      .then((data) => {
        console.log("file 1 성공", new String(data));
        // 2번 파일 읽기
        return this.es6PromiseDefine(this.file2);
      })
      .then((data) => {
        console.log("file 2 성공", data); // 내용이 길어서 문자열변환 X
        // 3번 파일 읽기
        return this.es6PromiseDefine(this.file3);
      })
      .then((data) => {
        console.log("file 3 성공", new String(data));
      })
      .catch((err) => {
        console.log("실패", err);
      })
      .finally(() => {
        console.log("종료, 완료");
      });
  }

  // (*)해결 3
  // Promise 패턴 -> 코드가 와일드하다(너무 길다!!) -> 간결하게 표현?
  // async ~ await => 내부적인 본질적 코드는 Promise
  // 작성규칙 : 
  //  - 비동기 함수 앞에 await 추가
  //  - await 존재하는 코드를 감싼 블럭(함수)에 async 추가
  async esnextAsyncAwait() {
    // 의도 : 1.txt -> 2.txt -> 3.txt
    // file1 읽어 -> 결과 왔어? -> 않왔다면 
    //            -> 기다려...-> 결과왔어? -> 왔음 -> 다음코드 : 동기식 구성 
    console.log( await this.es6PromiseDefine( this.file1 ) );
    console.log( await this.es6PromiseDefine( this.file2 ) );
    console.log( await this.es6PromiseDefine( this.file3 ) );
  }

  // 해결 4 : generator를 활용한 방식 고안 -> 생략
  // 복잡, iterator 이해,  yeild 등 이해가 필요 -> 활용 x 
} // end class

const obj = new Test();
//obj.sample();
// 결과에 일관성이 없음, 데이터의 크기에 따라 제가각!! => 컨트롤 어렵다!!
//obj.normal();
//obj.es6PromiseUse();
obj.esnextAsyncAwait();
