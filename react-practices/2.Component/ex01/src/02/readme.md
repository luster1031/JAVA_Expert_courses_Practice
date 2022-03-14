#  Data Flow(Top -> Down) : 클래스 컴포넌트
+ 방법1: render 앞에 const로 정적으로 때려 박기
    ```js
    import React, { Component } from 'react'
    import FoodListItem from './FoodListItem'

    export default class FoodList extends Component {
    render(){
        this.props.foods;
        const Components = [
            <FoodListItem name = "Egg" quantity="20"/>,
            <FoodListItem name = "Milk" quantity="10"/>
        ];
        return(
            <ul>
                {Components}
            </ul>
        );
    }
    }
    ```
2. 방법 2:
    ```js
    import React, { Component } from 'react'
    import FoodListItem from './FoodListItem'

    export default class FoodList extends Component {
    render(){
        const Components = [];
        this.props.foods.forEach(function(food){
            Components.push( <FoodListItem name={food.name} quantity={food.quantity}/>)
        });
        return(
            <ul>
                {Components}
            </ul>
        );
    }
    }

    ```
3. map
    ```js
    import React, { Component } from 'react'
    import FoodListItem from './FoodListItem'

    export default class FoodList extends Component {
    render(){
        const Components = this.props.foods.map(function(food){
            return <FoodListItem name={food.name} quantity={food.quantity}/>;
        });
        return(
            <ul>
                {Components}
            </ul>
        );
    }
    }

    ```

    + 함수 형태
        ```js
        const Components = this.props.foods.map(function(food){
                return <FoodListItem name={food.name} quantity={food.quantity}/>;
            });
        ```
        ```js
        const Components = this.props.foods.map((food) => <FoodListItem 
                                                                name={food.name} 
                                                                quantity={food.quantity}/>);
        ```
        + 바꾸기 가능