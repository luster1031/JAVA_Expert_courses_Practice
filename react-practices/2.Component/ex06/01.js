import fs from 'fs';

//  this.state -> 콘솔용으로 만들거임
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}


const updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "p002-001",
    "name": "팬츠 스트라이프",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);
//  달라야 랜더링 일어나는데.. 

console.log("================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}


const updateProducts2 = state.order.products.concat({   //  concate으로 다른 객체 만들어서 
    "no": "p002-001",
    "name": "팬츠 스트라이프",
    "price": 2000,
    "amount": 1
});
console.log(state.order.products, updateProducts2, state.order.products === updateProducts2); //  다르다고 나옴


console.log("================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
}
const updateProducts3 = [...state.order.products,{
    "no": "p002-001",
    "name": "팬츠 스트라이프",
    "price": 2000,
    "amount": 1
}];
console.log(state.order.products, updateProducts3, state.order.products === updateProducts3); 

