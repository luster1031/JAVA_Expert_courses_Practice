const path = require('path');

module.exports = {
    mode:'development',
    entry : path.resolve('src/index.js'),
    output : {
        path : path.resolve('public'),
        filename : 'bundle.js'
    },
    module:{
        rules:[{
            test:/\.(sa|sc|c)ss$/i,    //  어떤 파일이 나의 타겟인지 알려줘야함
            use:['style-loader','css-loader','sass-loader']
        }]
    },
    devServer:{
        host:'0.0.0.0', //  아무대나 들어올 수 있음
        port:9090,
        liveReload:true, //  소스 변경됐을 때, 찾아서 서버 다시 올릴 수 있음
        hot :false,
        compress:true    //  public의 내용을 서버 메모리에 올려서 작업함
    }
}