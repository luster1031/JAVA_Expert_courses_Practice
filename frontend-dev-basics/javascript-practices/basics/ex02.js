/* 
변수와 데이터 타입
[기본 타입(prinitive, 원시)]
    - undefined
    - number
    - string
    - boolean

[객체]
    - object
        1. new 생성 함수
    - function

    [객체1] - object type
    [객체2] - function type


*/

/*python은 다 객체 */

console.log("=======기본 타입(prinitive, 원시)=======");
var u;  //var u = undefined;와 똑같다. -> 선언과 정의에 대한 구분이 없다.
var i = 10;
var s = "Hello World";
var b = true;

console.log("u : " + typeof(u));    //  undefined
console.log("i : " + typeof(i));    //  number
console.log("s : " + typeof(s));    //  string
console.log("b : " + typeof(b));    //  boolean


/* 
    console.log(a);
    변수 테이블에 변수가 없으면 에러
    
    var a;
    console.log(a);
    이렇게 적으면 에러 안 남
*/

console.log("=======객체1: object type=======");
//  생성자 함수는 대문자 - 일반 함수랑 구분하기 위함
//  new 쓰면 object타입의 객체 만들 수 있다. 
var i2 = new Number(1);
var s2 = new String("Hello World");
var b2 = new Boolean(false);

var o = new Object();
var a = new Array();    //  배열도 객체다

console.log("i2 : " + typeof(i2));    //    object
console.log("s2 : " + typeof(s2));    //    object
console.log("b2 : " + typeof(b2));    //    object
console.log("o : " + typeof(o));    //    object
console.log("a : " + typeof(a));    //    object




console.log("=======객체2: function type=======");