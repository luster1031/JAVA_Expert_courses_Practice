/*
    구문(statement)
*/



// 세미콜론
i = 10  //  실행은 된다.
var s = "hello World"

i = 10;
// var s = "Hello World" console.log(s);   //  error남
var s = "Hello World"; console.log(s);  //  구문 분리



//=================================================
// 개행
// 예제 1. 
var s = "hello world"
console.log("[개행] : " + s)
    // 1. 토큰을 분리시 에러가 생김
    // 2. 세미콜론을 대체함


// 예제 2.
a 
= 
2 
+ 
2
    // error 가 안 난다.
    // 토큰 분리하기 때문 

// 예제 3.
// con;
// sloe.log(s);
if(i == 10){

};  // 구문 뒤에 세미콜론 붙이면 안된다.

f = function(){

};