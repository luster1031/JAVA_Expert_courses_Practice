/* null과 undefined*/

var myVar1 = undefined;     //  명시적으로 undefined 대입
var myVar2;         //  암시적으로 undefined 대입된다.
var myVar3 = null;  //  

console.log(myVar1 + " : " + myVar3);
console.log(typeof(myVar1) + " : " + typeof(myVar3));   // undefined : object


console.log(myVar1 == myVar3);  //  true : 값비교 - javascript 마음
console.log(myVar1 === myVar3); //  flase : type까지 비교함

var fn = (a,b) => a+b;
                


console.log("=======================================");
// == : equality, 값의 동치성, 형변환
console.log(4 == '4');      //  true
console.log(false == 0);    //  true
console.log('abc' == new String('abc'));    //  true
// 엄격하게 해줘야 나중에 버그 안 남


console.log(true + 10);     // 11 : boolean이 integer로
console.log('abc' + new String('abc'));     //  abcabc
console.log(1 + "1");       //  11 : number 가 string으로
console.log("1" + 1);       //  11 


console.log("=======================================");
//  === : identity
//  1. 타입의 동일성 + 값의 동일성 : 원시타입
//  2. 객체의 동일성 : 객체

console.log("2" === 2);     //   false : 원시타입
console.log(true === 1);    //   false : 원시타입
console.log(2 === 4);       //   false : 원시타입
console.log(new Number(4)=== new Number(4));     //   false : 객체의 동일성에 어긋남


