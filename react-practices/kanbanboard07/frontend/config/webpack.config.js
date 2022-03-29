const path = require('path');

module.exports = function(env) {
    return{
        mode:'development',
        entry : path.resolve(`src/index.js`),
        output : {
            path : path.resolve('../backend/src/main/resources'),
            filename : 'static/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module:{
            rules:[
                {
                    test:/\.js$/i,
                    exclude:/node_modules/,
                    loader :'babel-loader',
                    options:{
                        configFile:path.resolve('config/babel.config.json')
                    }
                },{
                    test:/\.(sa|sc|c)ss$/i,    //  어떤 파일이 나의 타겟인지 알려줘야함
                    use:[
                        'style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                modules:true
                            }
                        },
                        'sass-loader']
                },{
                    //  이미지와 관련된 rule
                    test : /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                    type : 'asset/resource'
                }
            ]
        },
        devServer:{
            host:'0.0.0.0', //  아무대나 들어올 수 있음
            port:9090,
            proxy: {
                '/api': 'http://localhost:8080'
            },
            liveReload:true, //  소스 변경됐을 때, 찾아서 서버 다시 올릴 수 있음
            hot :false,
            compress:true,    //  public의 내용을 서버 메모리에 올려서 작업함
            historyApiFallback : true   //  에러나면 번들링되는 시점으로 돌려나줌
        }
    };
}