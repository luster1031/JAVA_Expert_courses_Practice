### [ex01.Core 라이브러리](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/babel-practice/ex01)
1. 변환 (transpile) 규칙을 소스에 적용해서 변환 소스를 생성
2. 변환 규칙은 가지고 있지 않다. ```{}```
3. 바벨 플러그인이 변환 규칙을 가지고 있다. 
### [ex02. Babel CLI 사용하기](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/babel-practice/ex02)
### [ex03. Babel PlugIn(변환 규칙)](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/babel-practice/ex03)
### [ex04. Env Preset](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/babel-practice/ex04)
1. 여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 미리 관련 플러그인들을 모아 놓은 것
2. ECMAScript 년도별(버젼별)로 모아 놓은 것
    + stage(0, 1, 2, 3) 레벨별로 모아 둔 것도 있다. 
    + 3rd party(typescript, react) 등 종류가 다양함
3. Env Preset은 stage 3레벨 이상의 문법들을 변환하는 플러그인이다. 
4. Env Preset뿐만 아니라 다양한 플러그인들은 babel 설정을 통해서ㅓ 적용할 수 있다.(babel.config.json)
