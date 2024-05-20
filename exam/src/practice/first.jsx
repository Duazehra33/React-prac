import React, { useState } from 'react'

const First = () => {
    const [marks, setmarks] = useState(80)
  return(
    <>
    <div>
        <h1>
  my marks were {marks}
      </h1>
      <button onClick={()=>{
        setmarks(33)
      }}>Update</button>
    </div>
    </>
  )
}

export default First
