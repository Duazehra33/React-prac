import React from 'react'
import Item from './Item';
  //let foodItems = [];
  // let foodItems = ["Dal","green Veg","Roti","salad", "milk","ghee"];
  //  if(foodItems.length === 0){
  //   return<h3>Iam still Hungry.</h3>;
  // }
const FoodItem = ({items}) => {
  return (
    <div>
      
    <ul className="list-group">
      {items.map((item) => (
         <Item key={item} foodItem={item}></Item> ))}
    </ul>

    </div>
     /* <h1>Healthy food</h1>
      <ul className="list-group">
    <li className="list-group-item">Dal</li>
    
    <li className="list-group-item">green Veg</li>
    
    <li className="list-group-item">Roti</li>
    
    <li className="list-group-item">Salad</li>
    
    <li className="list-group-item">Juice</li>


      </ul> */

  )
}

export default FoodItem