# Data Flow : 함수 컴포넌트
+ 함수와의 차이점
+ 함수는 객체처럼 생각하면 안된다. 
+ render할 때마다 호출 됨
    + component가 다시 그려져야할 상황이면 ..?
+ this는 함수 자체이기 때문에 안 먹음
    ```js
    <ul>
        {this.props.foods.map((food) => <FoodListItem 
                                            name={food.name} 
                                            quantity={food.quantity}/>)};
    
        
    </ul>
    ```
> App.js
```js
import React from 'react'
import FoodList from './FoodList';

const App = function() {
    const foods = [{
        no:1,
        name : 'Bread',
        quantity : 10
    },{
        no : 2,
        name : 'Egg',
        quantity:20
    },{
        no : 3,
        name : 'Milk',
        quantity:5
    }];
    return(
        <div id="App">
            <FoodList foods={foods}/>
        </div>
    );
}

export default App
```
+ this. 쓰면 안됨 

<br>

> FoodList.js
```js
import React, { Component } from 'react'
import FoodListItem from './FoodListItem';
const FoodList = ({foods}) =>{
    return(
      <ul>
          {foods.map((food) => <FoodListItem 
                                  key={food.no}
                                  name={food.name} 
                                  quantity={food.quantity}/>)};
      </ul>
    )

}
export default FoodList;
```