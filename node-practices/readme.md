
# Node practices

## 1. 패키지(package)
- 완전한 애플리케이션(nodedeamon, babel, webpack)
- 프로젝트에서 사용하는 모듈(라이브러리)


## 2. 의존성(Dependency)
- 개발하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
### 1. 일반 의존성
+ 자바에서 이야기하는 의존성
+ 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함되어야한다. 
+ 라이브러리에 쓰는 것
    ```shell
    ${project-ex01} npm i ... (설치)
    ```
### 2. 개발 의존성
+ 개발에 필요하거나 도움이 되는 패키지(dev tool) 
+ 배포에 포함되지 않는다. 
+ 브라우저한테 보낼 때 babel 보낼 필요가 없음 
    ```shell
    ${project-ex01} npm i -D ...
    ```
+ 개발 애플리케이션

## 3. 패키지 설치 방식
+ 패키지가 있어야 설치 가능
+ 의존성으로 구분해서 설치함
### 1. 전역(global) 설치
+ npm이 깔려있는 곳에 설치함
    - ```..\nodejs\node_modules```에 설치함
+ 여러 프로젝트에서 공통으로 사용하는 도구 설치
### 2. 지역(project local) 설치
+ 설치하면 ```node_modules```가 생김
+ 특정 프로젝트에 종속적인 도구나 라이브러리
### 3. 패키지 설치
+ 패키지가 애플리케이션이나 라이브러리가 될 수도 있다.
    + local설치 (general dependency)
        ```shell
        ${project-ex01} npm i ejs
        ```
    + 개발 local설치 (dev. dependency)
        ```shell
            ${project-ex01} npm i -D nodemon 
        ```
        + 코드 감시하다가, 개발할 때 실행시켜놓으면 수정되면 다시 실행시켜주는 것
        + ```-D``` 를 붙이면 server git 다운로드시 다운로드시 ```/node_modeules```까지 설치하게 된다.
            + git에 올릴 때 ```/node_modeules```는 올리지 않음
    + global 설치
        ```shell
            ${project-ex01} npm i -g gulp 
        ```
    + 설치 확인
    ```shell
        ${project-ex01} npx gulp --version
    ```
    1. ★ package-lock.json → 중요함
        + package.json 문제가 있어서 생김
        + 디테일하게 보완한 것
            ```bash
            --- working A ----
            myprj
                /node_modules
                /src
                package.json
            
            ---------------
            ejs 3.1.6 
            async 2.1
            ```       

            
            ```bash
            --- A가 git에 올림 ----
            myprj
                /src
                package.json

            ----------------
            ejs 3.1.6
            async 2.1
            ```

            
            ```bash
            ${myprj} npm i
            --- B가 git에 다운 받음 ----
            
            
            myprj
                /node_modules
                /src
                package.json
            
            ----------------
            ejs 3.1.6
            async 2.2
            ```
        
        
            + json에 명시된 대로 다운 받아서 /node_model 생김
            + 다운 받을 때 최신버전이 다운 받아짐
            + 이걸 방지하기 위해 생긴게 ```package-lock.json``` 

    2. package.json
### 4. 패키지 삭제
+ local install 삭제
    ```shell
        ${project-ex01} npm un ejs
    ```
+ global install 삭제
    ```shell
        ${project-ex01} npm un -g gulp
    ```
+ 삭제 확인
    ```shell
        ${project-ex01} npx un -g gulp
    ```
    + 다시 설치하겠냐고 나와야 삭제가 된 것




## 4. Node(JavaScript) Project(BE/FE Application, Package) 방식
### 1. 프로젝트 생성 (mkdir)
### 2. 프로젝트 이동 (cd)
### 3. ★ 프로젝트 초기화 
+ 프로젝트 페니페스트 파일(package.json) 생성
    ```shell
        ${project-ex02} npm init -y
    ```


## 5. ★ Module 
+ ★ require js
+ ★ ES6 Module System

### 1. 코어 모듈 (fs, os, .... node에서 제공해주는 내장 모듈)
### 2. 파일 모듈 
+ 파일 경로로 불러와서 모듈안의 함수, 객체를 사용한다.
### 3. npm 모듈
+ npm을 통해서 ```node_modules```에 설치하고 사용하는 모듈
    - ```/node_modules```에 있는 것들
+ 외부 라이브러리를 다운 받아서 사용 가능
    - 원격 배포에 있는 라이브러리
    - 로컬 배포

[실습](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/node-practices/practice.md)



## 6. npmjs.com(npm registry)에 내 패키지 배포
+ 원격 배포
+ 나중에 해야함
+ [참고](https://github.com/kickscar/javascript-practices/tree/main/TechNotes/javascript-practices/11.Development%20Environments)

### [배포 실습](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/node-practices/distribution)


## 7. helloweb-ex01
+ express 프레임워크 X
+ 맨바닥
+ 웹애플리케이션 만들어보기
1. app01 : http : core module 기반
2. app02 : http, fs(file system) : core module 기반
3. app03 : connect, serve-static : npm package 기반
    ```shell
    npm i connect
    npm i serve-static
    ```
    
4. app04 : connect, serve-static, connect-route : npm package 기반
    + url 조절 할 수 있음 (특정 url 사용)
    ```shell
    npm i connect-route
    ```

## 8. helloweb-ex02
+ express 프레임워크 O
+ 웹애플리케이션 만들어보기
```
npm init -y

```
```

npm i express
```
