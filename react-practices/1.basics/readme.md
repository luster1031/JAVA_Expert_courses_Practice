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


## 3. ex02 : 애플리케이션1 : 애플리케이션 (파일)분리
1. 복잡한 애플리케이션은 코드를 분리해서 개발하는 것이 원칙
2. 애플리케이션 코드를 여러 js 파일로 옴기는 단순한 방식
    + 전통적인 분리 방식
    + 브라우저 js 파일의 로딩 순서를 보장하지 않는다. 
    + 복잡하고 분리 파일(모듈)이 많아지면 의존성 관리 자체가 불가능

## 4. ex03 : 애플리케이션2 : ES6 모듈 시스템 기반으로 분리

## 5. ex04 : (합칠때)번들링
+   webpack
## 6. ex05 : React API 기반의 애플리케이션 리팩토리
+ React(라이브러리이기때문에 API가 있음)
+ js 함수로 다 바뀜

## 7. ex06 : React JSX 기반의 애플리케이션 리팩토리 
+ xml script를 브라우저로 실행되려면 js code로 바꿔야 함
+ babel(transpile)

## 8. ex07 : ex00.cra Recofiguration (내가 직접 설정...)
## 9. ex08 : JSX Tutorial (문법에 대해)
## 10. webpack-practices
## 11. babel-practice