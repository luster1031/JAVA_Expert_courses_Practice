/*
    Array확장 (prototype 기반의 확장) : List 메소드 추가
*/

Array.prototype.remove = function(index){
    this.splice(index, 1);
}
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        /*for(var i = 0; i<value.length; i++){
            this.splice(index++, 0, value[i]);  //  [ 1, 2, 'a', 'b', 'c', 4 ] 가능함
        }*/

        console.log(this);  // -> insert를 호출하는 a
         

        /*
        !!!오류!!!
        콜백 안의 this는 예측 못 한다.(어휘상의 this와 일치하지 않는다.)
            value.forEach(function(e){
                this.splice(index++, 0 , e);
            });
        value의 this인지, a의 this인지 모른다. 
        */


        /* 해결방법 1
        var _this = this;
        value.forEach(function(e){
            // console.log(e); 
                //  a b c
            
                //  this.splice(index++, 0, e); -> 함수 안에의 this는 함수를 호출하는 것
                //  this는 value가 아님
                //  this를 누가 호출하는지 모름
            
            console.log("[for문 안에서의 this] "+ _this);
            _this.splice(index++, 0, e);
        });
        console.log("!!!!");
        */



        //  해결방법 2
        //  bind 함수를 호출해서 함수 실행 때의 this를 세팅해줄 수 있다.
        var f = function(e){
            this.splice(index++, 0 , e);
        };
        value.forEach(f.bind(this));
        /*
        value.forEach(function(e){
            this.splice(index++, 0 , e);
        }.bind(this));
        */

    }else{
        this.splice(index, 0, value);
    }
}

//  List로 사용하기 
var a = [1,2,4];
console.log(a);     //  [ 1, 2, 4 ]

a.insert(2, 3);
console.log(a);     //  [ 1, 2, 3, 4 ]

a.remove(2);
console.log(a);     //  [ 1, 2, 4 ]


a.insert(2, ['a', 'b', 'c']);   //  기대 [1, 2, 'a', 'b', 'c']
console.log(a);     //  [ 1, 2, [ 'a', 'b', 'c' ], 4 ]



