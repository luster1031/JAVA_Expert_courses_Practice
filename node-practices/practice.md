# 모듈써보기
```bash
/poso-ict-math
    |--- package.json
    |--- posco-ict-math.js
```

```bash
/project-ex02
    |--- package.json
    |--- app-ex01.js
    |--- app-ex02.js
    |--- node_modules
        |--- posco-ict-math
            |--- posco-ict-math.js
            |--- package.json
```
+ require module system으로
1. poscoict_math.js 파일 들고오기
2. mode_modules 아래에 설치하기


3. posco-ict-math만들기

```bash
npm init -y
```
4. app-ex01.js
    + posco-ict-math 파일 모듈 테스트
        ```bash
        ${project-ex02} node .\app-ex01.js
        ```
    + 모듈 패키지 : 로컬 배포
        + $npm i ../
        + 올릴 때, 이름이 유일해야함
    + 로컬 패키지 설치
        + posco-ict-math/package.json고치기
            ```json
            "main": "posco-ict-math.js",
            ```
        + 명령으로 설치후 테스트 할 것
            ```bash
                npm i ..\posco-ict-math\
            ```
        + ./node_modules밑에 posco-ict-math 생김
        