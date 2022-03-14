import React, { Component } from 'react'
import FoodListItem from './FoodListItem'

export default class FoodList extends Component {
  render(){
      /*
      const Components = [];
      this.props.foods.forEach(function(food){
        Components.push( <FoodListItem name={food.name} quantity={food.quantity}/>)
      });
      */

      /*
      const result = [1,2,3,4].map(function(e){ //  map은 새로운 요소를 만드는 것
        return e*e;
      });
      */
      return(
        <ul>
            {this.props.foods.map((food) => <FoodListItem 
                                              name={food.name} 
                                              quantity={food.quantity}/>)};
      
            
        </ul>
      );
  }
}
