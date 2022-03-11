/*
    let : Block Scope의 변수
*/

try{
    if(true){
        var i = 10; //  블락 스코프 아님
        let j = 20; //  블락 스코프
    }
    console.log(i, j);
}catch(e){
    console.log('[error]' + e);
}

//  cf. var의 함수 범위
try{
    let f = function(){
        var  m = 20;
    }

    f();
    console.log(m);
}catch(e){
    console.log('[error]' + e);
}


try{
    let f = function(){
        let  m = 20;
    }

    f();
    console.log(m);
}catch(e){
    console.log('[error]' + e);
}