/*
    const: Block Scope의 상수
*/

//  block scope 확인
try{
    if(true){
        const NUM = 10;
    }
    console.log(NUM);
}catch(e){
    console.log('[error] '+ e); //  [error] ReferenceError: NUM is not defined
}



//  error : 대입(Assignment) 에러
try{
    if(true){
        const NUM = 10;
        NUM = 20;
    }
    console.log(NUM);
}catch(e){
    console.log('[error] '+ e); //  [error] TypeError: Assignment to constant variable.

}