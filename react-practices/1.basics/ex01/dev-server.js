import http from 'http';    //  내가 받을 것만 적기
import * as path from 'path';
import express from 'express';

const port = 9090;
const application = express().use(express.static(path.join(path.resolve('.'),'public')));
//  모듈에서는 __dirname 쓸 수가 없음 -> path.resolve('.') 대체해줘야한다.

http
    .createServer(application)
    .on('listening', function(){
        //console.info('http server runs on ' + port);    
        console.info(`http server runs on ${port }`);    //  문자열 포맷팅
    })
    .listen(port);