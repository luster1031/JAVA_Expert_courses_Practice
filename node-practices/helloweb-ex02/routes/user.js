const { json } = require('express');
const express = require('express');

const router = express.Router();   //  라우터 객체 리턴해줌

// api
// path 

router.route('').get(function(req, res){
    res.render('user/info',{
        no:req.query.no || 0
    });
});


router.route('/join').get(function(req, res){
    res.render('user/join');
});

router.route('/join').post(function(req, res){
    console.log(req.body);
    res.redirect("/");
});

//  json으로 응답
router.route('/api').get(function(req, res){
    vo={
        no:10,
        name:'둘리',
        email:'dooly@gmail.com',
        gender:'male'
    };
    
    /*
    res.writeHead(200, {
       'Content-Type' : 'application/json'   //  messageconverter안하고 그냥 보내는 방법 
    });
    //  바로 vo 넣어 주면 안 됨 - string으로 바꿔서 보내줘야함
    res.end(JSON.stringify(vo));
    */
   
   res.send(vo);
});

router.route('/info/:no').get(function(req, res){
    res.render('user/info',{
        no:req.params.no || 0
    });
});
module.exports = router;    //  좋은 방법이 아님