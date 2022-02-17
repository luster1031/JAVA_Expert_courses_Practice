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


# ==, ===
> ex03.js
### 1. == : equality, 값의 동치성, 형변환
### 2. === : identity
1. 타입의 동일성 + 값의 동일성 : 원시타입
2. 객체의 동일성 : 객체
+ 엄격하게 해줘야 버그 안 남