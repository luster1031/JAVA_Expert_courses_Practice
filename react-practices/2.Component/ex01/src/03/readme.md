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