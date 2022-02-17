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

// 객체 리터럴, 배열 리터럴
var o2 = {};    // 빈 객체
var a2 = [];    
console.log("o2 : " + typeof(o2));    //    object
console.log("a2 : " + typeof(a2));    //    object


//  null
var n = null;
console.log("n: " + typeof(n));    //    object

//  함수 
var F = function(){
}
var o = new F();
console.log("o: " + typeof(o));    //    object
console.log("F: " + typeof(F));    //    function




console.log("=======객체2: function type=======");
function f1(a,b){
    return a+b;
}


var f2 = function(a,b){
    return a + b;
}

var f3 = new Function("a","b","return a+ b");
console.log("f1 :" + typeof(f1));   //  function
console.log("f2 :" + typeof(f2));   //  function
console.log("f3 :" + typeof(f3));   //  function


console.log("======= 원시타입과 원시타입의 Wrapper 객체는 구분없이 사용할 수 있다.=======");
console.log(i+ i2);
console.log(s + s2);


//  원시 타입에 메소드가 호출 될 때, 
//  원시 Wrapper 객체가 만들어져 메소드 후출이 일어난 뒤 사라진다. (유사객체)
console.log("======= 원시타입도 메소드 호출이 가능하다. =======");
console.log(b.valueOf());   //  원시타입인데 불러 쓸 수 있다.
console.log(b2.valueOf());  //  객체라서 당연히 부를 수 있음
