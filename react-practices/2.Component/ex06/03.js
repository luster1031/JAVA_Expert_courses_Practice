import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}
let updateOrder =Object.assign({}, state.order,{
    receive:'부산시 해운대구 우동...'
})

updateOrder.payment.method = "Modile";

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,    //  false
    state.order.receive === updateOrder.receive,    //  false
    state.order.payment === updateOrder.payment     //  true
);
