### [ex01 - let : Block Scope의 변수](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex01.js)
+ 변하는 변수면 : let
+ 변하지 않는 변수는 : const

### [ex02 : const: Block Scope의 상수](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex02.js)
1. block scope 확인
2. 대입(Assignment) 에러


### [ex03 : Template Literal](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex03.js)
+ 리터럴은 개행을 지원해줌
### [ex04 : Default Parameter](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex04.js)
+ 파라미터에 값 안주면 디폴트 값이 있음
```java
inteface ITest{
    test();
}

new Itest(){
    void  test(){
        
    }
}
```
### [ex05 : Arrow Function](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex05.js)
+ 화살표 함수
+ this는 어휘적으로 바인딩이 가능



### [ex06 : 구조 분해(Destructing)](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex06.js)
1. Default Value
2. 구조분해해야 할 객체의 속성과 변수 이름이 다를 때
3. 내부 객체 (Nested Object)의 구조 분해
4. 함수의 파라미터


### [ex07 : class](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex07.js)
+ 생성자 함수 기반
+ extends 상속

### [ex08 : export ](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/frontend-dev-basics/javascript-practices/es6/ex08.mjs)
1. unamed export
2. 이름 없는 객체를 export
3. 이름 있는 객체
    1. 이 모듈을 import 할 때에는 destruting이 가능하다.
        + named export는 import 대상이 다수이기 때문에 하나의 특정 이름으로 받을 수 없다.
        + 대신 ```* as m```으로 사용 가능
    2. import destruction
4. export destruction
5. name & unamed export
