const fetch = function (param, callback) {
    return new Promise(function (reslove, reject) {// 반드시 return을 할 거다
        //  비동기 코드 : 파일 시스템 접근, 네트워크통신, SQL to DB, setTimeout
        //  $.ajax({}) 함수가 같음
        setTimeout(function () {
            if (param == 'param-data') {
                reslove('ok');
            } else {    //  실패했을 때, 네트워크 끊기거나
                reject(new Error('fail'));
            }
        }, 2000);
    })
}


//  실행 시 단독으로 실행 (node ex02 했을 때 실행되는 것)
if (require.main == module) {

    //  test 01 : success
    fetch('param-data').then(function (res) {
        console.log(res);
    })


    //  test 02 : fail
    fetch('param-error').then(function (error) {
        console.error(error);
    })

    /*
    //  일반적으로 사용할 때,
    fetch('param...')
        .then(function(res){
    
        })
        .catch(function(eroor){
    
        });
    */

    console.log("wait...");

}else{  //  import, require 당했을 때
    module.exports = fetch;
}


