import React, { useState } from 'react'
import Header from './Header'

const Page = () => {
    const [user, setuser] = useState("Dua")
  const [editor, seteditor] = useState("Sarthak")
  return (
    <div>
         <Header user={user} edit={editor}></Header>
      <div className="container mt-5">
      </div>


    </div>
  );
}



export default Page
