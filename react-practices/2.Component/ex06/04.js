import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}

let updateOrder = update(state.order, {
    receive: {
        $set: '부산시 해운대구 우동'
    },
    payment:{
        method:{
            $set: 'Mobile'
        }
    },
    products:{
        //  배열 요소 변경(인덱스 찾아서)
        0 : {
            amount :{
                $set : 5
            }
        }
        ,
        //  배열 요소 추가 
        $push :[{
            "no" : "c002-003",
            "name" : "블루양말",
            "price":2500,
            "amount" : 10
        }]
    }
});

console.log(
    state.order,
    updateOrder
);


    /*
    {
        no: 1,
        orderNo: '20210511-000001',
        description: '청데님외 2건',
        status: '재고확인중',
        receive: '서울시 은평구 진관동...',
        payment: { price: 11000, method: 'Credit Card' },
        products: [
            { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
            { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
            { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
        ]
        } {
        no: 1,
        orderNo: '20210511-000001',
        description: '청데님외 2건',
        status: '재고확인중',
        receive: '부산시 해운대구 우동',
        payment: { price: 11000, method: 'Mobile' },
        products: [
            { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 5 },
            { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
            { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 },
            { no: 'c002-003', name: '블루양말', price: 2500, amount: 10 }
        ]
    }
    */