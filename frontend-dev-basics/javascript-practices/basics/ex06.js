 /* 
    Object 타입으니 객체
    자바스크립트 객체 1 : object 타입
 */

//  생성 방법 1
//  생성자 함수를 사용하는 방법
//  object, Number, String, RegExp, Date, Array - 내장객체(내장 생성자 함수)
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이클";
o1.another.age = 30;
console.log(o1);

//  사용자 정의 생성자 함수
var MyObject = function(name){
    this.name = name;
}

var o2 = new MyObject("임한나");
console.log(o2);


//  생성 방법 2
//  {} 리터럴을 사용하는 방법
var o3 = {};
o3.name = "둘리";
o3.age = 10;
o3.another = new Object();
o3.another.name = "마이클";
o3.another.age = 30;
console.log(o3);


//  생성 방법 3
//  (J)ava (S)cript (O)bject (N)otation
var o4 = {
    name :'둘리',
    age : 10,
    another:{
        name:'마이콜',
        age : 30
    }
};
console.log(o4);


o4.displayInfo = function(){
    console.log("[displayInfo] : " + this.name, this.age);
}
o4.displayInfo();


var i = 10;
// i.displayInfo = function(){ 
// }
    //  i가 객체가 아니기때문에 쓰면 안된다. 



//  XmlHttpRequest 호스트 (브라우저) 객체를 사용해서 통신(Ajax)에서 데이터 교환의 포맷으로 JSON을 사용한다.
var response = '{name : "둘리", age : 10, email:"dooly@gmail.com"}';    //  스트링으로 통신 받음
var userVo =  eval("(" + response + ")")
    // ({name : "둘리", age : 10, email:"dooly@gmail.com"}) 이렇게 실행한 것
    // js 실행시켜주는 eval 
console.log("[ajax통신] : " + userVo.name);

