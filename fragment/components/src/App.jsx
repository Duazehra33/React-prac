import React from 'react'
import "./App.css"
import FoodItem from './comp/fooditems'
const App = () => {
  //destructuring
  let foodItems = ["Sabzi","green Veg","Roti","salad", "milk","ghee"];
   
  return (
    <>
    <h1>Healthy food</h1>
    <FoodItem items={foodItems}></FoodItem>

      </>
  )
}

export default App
