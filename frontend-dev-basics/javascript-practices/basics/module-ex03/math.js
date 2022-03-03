/**
 * exports 뒤에 이름을 사용해서 export 한다.
 */
exports.pi = 3.14;
exports.max = function(){
    var max = Number.MIN_SAFE_INTEGER;  //  제일 작은 값
    Array.from(arguments).forEach(function(e){
        max = e > max ? e : max;
    });
    return max;
};
exports.min = function(){
    var min = Number.MAX_SAFE_INTEGER;  //  제일 큰 값
    Array.from(arguments).forEach(function(e){
        min = e < min ? e : min;
    });
    return min;
};