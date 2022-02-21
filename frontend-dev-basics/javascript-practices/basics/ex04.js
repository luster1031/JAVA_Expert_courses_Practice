/*
    범수의 범위 (Scope)
*/

//  함수 범위
var f = function(){
    i = 10; //  hoisting
}

f();    //  context가 만들어짐

if(i > 10){ //  살아 있어서 참조 할 수 있다.

}



//=======================================
var i = 10;
var f = function(){
    var i = 20;
    j = 100;    //  var를 써서 헷갈림이 없도록 한다.
    console.log(i); //  20
    i = j-1;
    console.log("[함수 안의 j] " + this.j);
    console.log("[함수 안의 i] " + this.i);
}

//  var 키워드는 함수블록에서 함수 범위만 가지게 할 때
if(90 + 10 == 100){
    var k = 30;
}

f();
console.log(i); //  10
console.log(j); //  100
console.log(k); //  30


// ====================================================
o = {}; // 대입 표현식
{
    
}  // 블록범위



{
    let x= 10000000;
    const PI = 3.14;
    x = 100;

    // PI = 0;
    
}

//error : 접근이 안 된다. 
// console.log(x);
// console.log(PI);



o = 10;
o;  //  error 안 남


// p;  //  error
var p;  //  정의 구문(undefined와 똑같)

