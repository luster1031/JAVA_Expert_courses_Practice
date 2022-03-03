//  추천하진 않는다.
module.exports = {
    PI : 3.14,
    max:function(){
        var max = Number.MIN_SAFE_INTEGER;  //  제일 작은 값
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });
        return max;
    },
    min:function(){
        var min = Number.MAX_SAFE_INTEGER;  //  제일 큰 값
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });
        return min;
    }
}