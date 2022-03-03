# 패키지 배포
> [강사님 github](https://github.com/kickscar/javascript-practices/blob/main/TechNotes/javascript-practices/11.Development%20Environments/02.%20npm.md)

+ package.json 
    + 배포 목적으로 많이 쓰임
        + 배포할 패키지에 반드시 있어야 한다. 
    + 배포되어 설치되는 패키지는 다른 패키지에 의존성을 지님
        + 다른 패키지에 대한 의존성을 package.json에 적어야함
+ package-lock.json 
    + 의존성 관리만이 주목적
    + node_modules, package.json 변화 반영함
+ npm i 
    + package-lock.json 의 의존성 우선
    + package-lock.json 없으면, pacakge.json 참고해서 설치함

## 1. [실습 ] 패키지 작성과 설치
+ luster1031-math 모듈 패키지 작성하고 설치 및 사용하기

### 1. 패키지 luster1031-math 프로젝트 디렉토리 만들기
```bash
${distribution} mkdir luster1031-math
${distribution} cd .\luster1031-math\
```
```bash
distribution
    |-- luster1031-math
```

### 2. luster1031-math.js

### 3. project-ex02 디렉토리 만들기 (테스트 애플리케이션)
```bash
${distribution} mkdir project-ex02
${distribution} cd .\project-ex02\
```
```bash
distribution
    |-- luster1031-math
    |-- project-ex02
```
### 4.  app-ex01.js (테스트 애플리케이션)
+ 파일 모듈 테스트
```bash
${project-ex02} node app-ex01
```
### 4. app-ex02.js (테스트 애플리케이션)
+ npm 모듈 테스트
+ 경로대신 이름만 적어줘도 된다. 
    ```js
    const luster1031Math = require('luster1031-math');
    ```
+ ```luster1031-math```모듈 설치해야함
    1. package.json 생성해서 ```luster1031-math```모듈을 배포 패키지로 만들기
    2. 이 패키지 설치 
    3. app-ex02.js 정상적으로 작동하게 만들기
### 5. ```luster1031-math```모듈 패키지 배포
+ 로컬 배포
    1. package.json 생성
        ```bash
        ${distribution} cd .\luster1031-math\
        ${luster1031-math} npm init
        ```
        ```bash
        /distribution
            |-- luster1031-math
                |-- luster1031-math.js
                |-- package.json   (생김)
        ```
    2. project-ex02에 ```luster1031-math```모듈 패키지 npm으로 설치
        ```bash
        ${project-ex02} npm i ..\luster1031-math\
        ```
        ```bash
        /distribution
            |-- luster1031-math
            |-- project-ex02
                |-- node_modules
                    |-- luster1031-math (설치)
                |-- package-lock.json
                |-- package.json
        ```
    3. app-ex02.js실행
        ```bash
        ${project-ex02} node app-ex02
        ```
### 6. npm registry 원격에 배포하기 
1. npm 계정 정보 입력
    ```bash
    ${node-practice} npm adduser
    ```
2. 모듈 패키지 ```luster1031-math``` 업로드하기 
    ```bash
    ${luster1031-math} npm publish
    ```
3. 계정에 업로드 확인
    ![image](https://user-images.githubusercontent.com/61460836/156592957-b58f2978-2ab4-426a-a476-7a61bddfa048.png)
4. 테스트 애플리케이션을 작성할 project-ex03 디렉토리 생성
    ```bash
    ${distribution} mkdir project-ex03
    ```
5. app-ex01.js 생성
    + 테스트 애플리케이션
    + npm 레지스트리에서 다운해서 설치 할 것임
6. luster1031-math 모듈 설치 
    ```bash 
    ${project-ex03} npm i luster1031-math
    ```
    ```bash
    project-ex03
        |-- node_modules (생성됨)
            |-- luster1031-math (생성됨)
                |-- luster1031-math.js (생성됨)
                |-- package.json (생성됨)
        |-- app.ex01.js
        |-- package-lock.json (생성됨)
        |-- package.json (생성됨)
    ```
7. app-ex01.js실행
