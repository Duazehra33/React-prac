import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <h1>This is homepage</h1>
      
        <Link href="/About">About</Link>
        <Link href="/Courses"> Courses</Link>
        <Link href="/Product">Product</Link>

        
    </div>
  )
}

export default Home
