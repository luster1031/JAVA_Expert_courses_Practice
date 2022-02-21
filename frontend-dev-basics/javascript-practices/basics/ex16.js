/*
    function 타입의 객체 (함수)
*/



//  함수를 생성하는 방법 1 : 함수 리터럴
function f1(a,b){
    return a+b;
};
console.log(typeof(f1), f1(10, 20));    //  function 30



//  함수를 생성하는 방법 2 : 함수 리터럴(추천)
var f2 = function(a,b){
    return a + b;
};
console.log(typeof(f2), f2(10, 20));    //  function 30



//  함수를 생성하는 방법 3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function("a", "b", "return a +b"); //  코드가 길 땐, 안 좋음 
console.log(typeof(f3), f3(10, 20));    //  function 30



//  함수를 생성하는 방법 4 : 익명(Anonymouse) 함수
//  callback
setTimeout(function(){
    console.log("time out!!!");
}, 1000);


//  즉시 실행하는 함수 : 생성과 동시에 실행
var s = (function(a, b){
    return a + b;
})(10,20);
console.log(s); 



//  가변 파라미터 함수
var sum = function(){
    console.log(arguments)
    /*
        [Arguments] { '0': 10 }
        0
        [Arguments] { '0': 10, '1': 20 }
        0
        [Arguments] { '0': 10, '1': 20, '2': 30 }
        0
        [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50 }
        0
            -> arguments는 객체다
    */
    console.log(arguments instanceof Array);    //  false
    console.log(arguments instanceof Array, arguments.length);    //  length는 가지고 있다 -> 유사배열
    
    var sum =  0;
    /*
    for(var i = 0;  i<arguments.length; i++){
        sum += arguments[i];
    }
    */



//    Error : arguments의 __proto__는 Object의 prototype에 chain 되어 있기 때문
//    arguments.forEach(function(e){
//        sum += 0;
//    });
   //  유사 배열이지, 배열이 아니기 때문에 forEach를 찾을 수가 없다.

    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    });
    //  호출하면서 this를 넣어주는 것
    //   파라미터가 하나만 있으면 apply넣어 주면 됨
    return sum;
};

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));