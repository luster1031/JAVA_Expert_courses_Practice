# React Practices - Basics

## [1. ex00.cra : create-react-app(cra)으로 React Application 빨리 만들기](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex00.cra)
```shell
${/1.basics} npm i -g create-react-app
${/1.basics} npx create-react-app ex00.cra
${/ex00.cra} npm start
```
+ Reconfiguration 자동 설정

## [2. ex01 : 전통적인 DOM API 기반의 애플리케이션](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex01)
1. DOM API를 직접 자바 스크립트 코드로 호출
2. 주로 DOM 조작에 특화된 jQuery와 같은 라이브러리를 활용하게 된다. 
3. 장점은 작성된 애플리케이션 코드의 전달이 쉽다. 
    + 작성된 대로 js 파일을 html에 링크


## [3. ex02 : 애플리케이션1 : 애플리케이션 (파일)분리](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex02)
1. 복잡한 애플리케이션은 코드를 분리해서 개발하는 것이 원칙
2. 애플리케이션 코드를 여러 js 파일로 옴기는 단순한 방식
    + 전통적인 분리 방식
    + 브라우저 js 파일의 로딩 순서를 보장하지 않는다. 
    + 복잡하고 분리 파일(모듈)이 많아지면 의존성 관리 자체가 불가능

## [4. ex03 : 애플리케이션2 : ES6 모듈 시스템 기반으로 분리 - ES6 모듈 시스템](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex03)
1. 프론트엔드 애플리케이션의 수십, 수백 개의 분리된 경우, 브라우저에서 이 모듈들을 import하는 것은 상당히 비 효율적이다.
2. 프론트엔드 애플리케이션은 자바 스크립트 외에 다양한 에셋(css, image, font)에 로딩 동기화도 고려해야한다.
    + 한번에 의존관계를 다 파악한 다음, 하나의 js파일로 바꾸는 방법 -> 번들 js : webpack
<br>

+ 서버 쪽에서 돌때는 package.json에 ```  "type": "module",``` module을 사용할 것이라는 걸 적어줌 
+ browser쪽에서 돌때는 index.html ```type="module"```에 적어줌
+ 의존성 트리를 browser가 만듦
+ 모듈간의 의존성을 못 맞춤
    + 이미지 사이즈 줄이거나, 이미지를 뭘 하는 걸 못 함
    + 하나의 자바 스크립트로 합쳐야함

## [5. ex04 : (합칠때) 애플리케이션 번들링](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex04)
+ webpack
1. webpack은 작게 분리된 많은 애플리케이션의 모듈(js, css, image, font)들의 **의존성을 분석**해서 하나의 JS 파일로 묶는 도구
    + 의존관계를 트리로 만듦
    + 전부를 js로 만듦
    + browser에게 하나의 파일로 보냄
2. 하나의 JS파일을 번들(buddle)이라고 하고, 묶는 작업을 번들링(buddling)이라고 한다.
3. 번들링 단순히 모듈들의 하나의 파일로 묶는 작업만을 의미 하진 않는다.(bulid 작업도 함)
4. 빌드 작업 
    1. linting(ESLint, 문법 체크) 작업
    2. document 작업(JSDoc) 작업
    3. test(Mocha, jest) 작업
    4. 난독화/ 압축(uglyfy) 작업
        + 있는 코드 다 가져오는 것이 아닌, 많은 스페이스는 없애고 변수 명을 다 치환함
    5. 번들링
5. 자바스크립트 뿐만 아니라 다양한 에셋(image, css, font)들로 모듈로 취급
6. 설치
    ```bash
    $ npm i -D webpack webpack-cli
    $ npm .\node_modules\.bin\webpack --version (설치 확인)
    $ npx webpack --version (설치 확인)
    ```
    + webpack은 es6지원하지 않는다.
        > package.json
        ```json
        "type": "module",
        ```
        + 없애야함
    + 파일명 dev-server.mjs로 고치기
    + start 고치기
        > package.json
        ```json
        "start": "node dev-server.mjs",
        ```
    + webpack실행    
7. package.json scripting("build" stage)
8. ```$ npm run build```
    + package.json 에 해놔서 가능
        ```json 
        "build":"npx webpack ./src/index.js -o ./public"
        ```
    

## 6. [ex05 : React API 기반의 애플리케이션 리팩토리](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex05)
+ React(라이브러리이기때문에 API가 있음)
+ js 함수로 다 바뀜

## 7. ex06 : React JSX 기반의 애플리케이션 리팩토리 
+ xml script를 브라우저로 실행되려면 js code로 바꿔야 함
+ babel(transpile)

## 8. ex07 : ex00.cra Recofiguration (내가 직접 설정...)
## 9. ex08 : JSX Tutorial (문법에 대해)
## [10. webpack-practices](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/webpack-practice)
1. 커맨드 라인
2. webpack.config.js
3. dev-server
4. css 적용
5. scss 
## 11. babel-practice