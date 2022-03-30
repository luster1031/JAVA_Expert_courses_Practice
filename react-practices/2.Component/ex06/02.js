import fs from 'fs';

//  this.state -> 콘솔용으로 만들거임
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}
let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동...';

console.log(state.order, updateOrder1, state.order=== updateOrder1);    //  옛날거 까지 다 바꿈


console.log("\n======================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}
let updateOrder2 = Object.assign({}, state.order, {receive:'부산시 해운대구 우동...'});

console.log(state.order, updateOrder1, state.order=== updateOrder1);    //  기존건 그대로, 한개 더 생김
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
    receive: '부산시 해운대구 우동...',
    payment: { price: 11000, method: 'Credit Card' },
    products: [
        { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
        { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
        { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
    ]
    } false
    */


