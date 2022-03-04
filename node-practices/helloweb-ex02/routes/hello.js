const express = require('express');

const router = express.Router();   //  라우터 객체 리턴해줌

router.route('/01').get(function(req, res){
    //  rendering하기 전에 DB만들어서 사용 가능
    res.render('hello/01');
});

router.route('/02').get(function(req, res){
    const data={
        no : req.query.no || '', /* null이 될 경우 기본값으로 */
        email : req.query.email || ''
    };
    res.render('hello/02',data);
});
/*
router.route('/01').get(function(req, res){
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    });
    res.end("<h1>/hello/</h1>");
    
});
*/

module.exports = router;    //  좋은 방법이 아님