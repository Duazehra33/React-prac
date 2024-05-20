import React from 'react'

const Item = (props) => {
  return (
    <div>
       <li  className="list-group-item kg-item ">{props.foodItem}</li>
     
    </div>
  )
}

export default Item
