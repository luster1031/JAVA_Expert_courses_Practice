# 변수와 데이터 타입(data type)
> ex02.js
### 1. 기본 타입(prinitive, 원시)

- undefined
- number
- string
- boolean

### 2. 객체

- object type
  1. new 생성자 함수()를 사용해서 생성
     - 생성자 함수는 대문자로 시작함 - 일반 함수랑 구분하기 위함
     - new 쓰면 object 타입의 객체를 만들 수 있음
       ```js
       var i2 = new Number(1);
       var s2 = new String("Hello World");
       var b2 = new Boolean(false);
       ```
       - Number() => object type
       - String() => object type
       - Boolean() => object type
       - Object() => object type
       - Array() => object type
       - Function만 예외 => object type 아님
     - 배열도 객체, 배열과 객체가 별 차이가 없음
       `var a = new Array(); `

  2. {} 객체 리터럴, J(ava) S(cript) O(bject) N(otation)
  3. [] 배열 리터럴
  4. null
 
  <br>

- function type

  1. `function f(){...}` 생성
  2. `var f = function(){...}`
  3. `var f = new Function(...);`

  ```js
  function f1(a, b) {
    return a + b;
  }

  var f2 = function (a, b) {
    return a + b;
  };

  var f3 = new Function("a", "b", "return a+ b");
  ```

<br>

----

### - 원시타입과 원시타입의 Wrapper 객체는 구분없이 사용할 수 있다.

```js
var i = 10;
var s = "Hello World";
var i2 = new Number(1);
var s2 = new String("Hello World");

console.log(i + i2);
console.log(s + s2);
```

<br>

---

### - 원시타입도 메소드 호출이 가능하다.

```js
var b = true; //  원시타입
console.log(b.valueOf());
```

- 임시객체를 만들어줌
  - js engine 안에서 코드 실행할 때, `new Boolean(b).valueOf();`하고 사라짐
    - 원시 Wrapper 객체가 만들어져 메소드 호출이 일어난 뒤 사라진다.
  - 유사 객체

<br>

----

### - 자바스크립트 객체를 구분하는 또 다른 방법

1. 내장(Built-in, Native, Engine) 객체
   - 자바 스크립트 엔진 안에 미리 내장되어있는 객체
   - Number, Boolean, Data, RegExp, ... : 생성자 함수
   - setTimeout, parseInt, ... : 일반 함수
2. 호스트 객체
   - 자바스크립트 엔진이 임베드된 환경(호스트)의 객체
   - 호스트 환경이 2가지
     - 브라우저 : document, location, XmlHttpRequest, window, ...
     - 노드(node.js) : os, http, fs, path(디렉토리 조작)
3. 사용자 객체
   - 자바 스크립트 엔진이 실행되면서 생성되는 객체들 ...


<br>

<br>


# 자바스크립트 객체 1 : object 타입
> ex06.js
### 1. 자바스크립트 객체는 object 타입과 function 타입 두 가지가 있다. 
### 2. 보통, function 타입의 객체는 '함수'라고 부른다. 
### 3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라고 할 수 있다. 
## 생성방법
1. 생성자 함수를 사용하는 방법
+ Object, Number, String, RegExp, Date, Array - 내장객체(내장 생성자 함수)
+ 사용자 정의 생성자 함수
2. ```{}``` 리터럴을 사용하는 방법
3. (J)ava (S)cript (O)bject (N)otation
+ XmlHttpRequest 호스트 (브라우저) 객체를 사용해서 통신(Ajax)에서 데이터 교환의 포맷으로 JSON을 사용한다.


<br>

<br>

# 자바스크립트 객체 2 : function 타입
> ex07.js
+ 일반 함수 (실행코드[알고리즘] 블록이 있는 객체, 관례에 따라 소문자로 시작)
+ 생성자 함수 (실행코드[객체초기화] 블록이 있는 객체, 관례에 따라 대문자로 시작)


<br>

<br>



# 자바스크립트 객체 3 : 확장
> ex08.js
+ 기본 타입 (primitive type)은 확장 되지 않는다.
<br>

<br>



# 자바스크립트 객체 4 : prototype 기반의 상속과 오버라이딩 (자바스크립트 객체 지향 프로그래밍)
> ex09.js



<br>

<br>

# ==, ===
> ex03.js
### 1. == : equality, 값의 동치성, 형변환
### 2. === : identity
1. 타입의 동일성 + 값의 동일성 : 원시타입
2. 객체의 동일성 : 객체
+ 엄격하게 해줘야 버그 안 남



<br>



# 변수의 범위 (Scope)
> ex04.js
### 1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다. 
### 2. ES6 이전
+ 자바와 같은 블록 범위를 지원하지 못했다.
+ 함수 범위
  +  ```function(){...}``` 안에서 변수 앞에 ```var``` 키워드를 사용하면 함수 범위를 가지게 된다. 
  + 만약에 var 키워드가 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다. (hoisting)



### 3. ES6 이후
+ Block Scope을 적용할 수 있는 두 개 의 키웓드를 지원한다. ```(let(var), const(상수))```
  + let이 var를 포함
  + let : 변수에만 붙임
  + const : 상수에만 붙임


### 4. 결론
+ const, let만 사용하고 반드시 붙히자.
  + 안 붙이면 hoisting -> 전역됨

<br>

<br>

# 구문(statement)
> ex05.js
+ 표현식을 구문으로 만든는 것 : 세미콜론
  + 실행을 하게 만든다. 
### 1. 자바 실행 단위
### 2. 구문의 구성 요소
+ 값, 연산자
+ 주석 : 구문을 구성해도 실행되지 않는다.
+ 예약어들 : if, const, for, ...
### 3. 구문의 예
+ 주석 구문
  + ```if(1-1 == 0)```
+ ```if ~ else```
+ ```switch```
+ ```for```, ```while```, ```do~while```, ```for ~ in```
### 4. 공백 : 토큰 분리 
+ 공백으로 분리한다.
+ 공백이 아무리 많아도 한개로 처리함
+ ```1010101010 d ```
  + 리터럴 뒤에 변수가 나오면 error : syntaxError
### 5. 세미콜론
+ 원칙적으로 구문을 분리한다.
+ 표현식을 표현식구문으로 만들어서 표현식을 실행하게 한다.
  ```js
  i = 10; j = 10; consloe.log(i);
  ```
### 6. 개행의 역할
1. ```;```을 대체한다.
  ```js
  var s = "hello world"
  console.log("[개행] : " + s)
  ```
2. 상황에 따라서 토큰을 분리한다.
```js
a 
= 
2 
+ 
2
``` 
3. 어쩔때 1 or 2번이냐?
  + 상황에 따라서 
  + 자바스크립트 엔진이 에러없는 실행을 우선 원칙으로 1번과 2번을 판단해 낸다.


