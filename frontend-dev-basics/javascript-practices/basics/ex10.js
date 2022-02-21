/*  배열   */
//  배열 생성 1 : 내장 객체 (생성자 함수)
console.log("== 배열 생성 1 : 내장 객체 (생성자 함수)를 사용 ===");

var a1= new Array();
console.log(typeof(a1), a1 instanceof Array);   //  object true
console.log(typeof(a1), a1 instanceof Array, a1.length);   //  object true 0


//  배열을 생성할 때 크기 지정
var a2 = new Array(10);
console.log(typeof(a2.length));     //  number
console.log(a2[0], a2.length);      //  undefined 10
console.log(a2[0], a2[1], a2.length);   //  배열 요소에 값을 지정 안하면 undefined

a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[20] = 20;
// 배열을 생성할 때 크기 지정은 별 의미가 없다. 
// 동적으로 배열은 늘어난다. 
console.log(a2[0], a2[1], a2.length);   //  [결과] : 0 undefined 21


//  초기값을 지정할 수가 없다. 
var a3 = new Array(0,2,4,6,8);
console.log(a1.length);     //   [결과] : 0





//  배열 생성 2 : 리터럴을 사용하기
console.log("===배열 생성 2 : 리터럴 사용 =====");
var a4 = [];

console.log(typeof(a4), a4 instanceof Array, a4.length);    // [결과] : object true 0
a4 = [10, "JavaScript", function(){
    console.log("Hello World");
},{ //  그냥 객체 
    name : '마이콜',
    age : 30
}];
console.log(typeof(a4), a4 instanceof Array, a4.length);    // [결과] : object true 4

for(var i = 0; i < a4.length; i++){
    console.log(a4[i]);
}   /*  [결과] : 
        10
        JavaScript
        [Function (anonymous)]
        { name: '마이콜', age: 30 }
    */
a4[2]();    //   Hello World




//  Array       vs      Object
console.log("============= Array     vs      Object =============");
a5 = [];
a5[0] = 0;
a5["1"] = 1;
console.log(a5.length);     //  [결과] : 2

a5.name = "둘리";   //  객체 추가
a5.age = 10;
console.log(a5.length);     //  [결과] : 2  -> 길이는 안 늘어남
    //  length를 engine이 관리하기 때문에

console.log(a5["0"], a5[1], a5.length, a5["name"], a5.age);     //  [결과] : 0 1 2 둘리 10
for(prop in a5){
    console.log(prop, a5[prop]);
}



o5 = {}
o5[0] = 0;
o5["1"] = 1;
o5.name = "둘리";   //  객체 추가
o5.age = 10;
console.log(o5["0"], o5[1], o5.length, o5["name"], o5.age);     //  [결과] : 0 1 undefined 둘리 10
    // length 자동으로 처리 안 해줌

o5.length = 2;
console.log(o5["0"], o5[1], o5.length, o5["name"], o5.age);     //  [결과] : 0 1 2 둘리 10

