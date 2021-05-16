import React from 'react'
import {Link } from "react-router-dom";
import '../App.css'


function Home() {              

      
  return (
    
      <div className="wrapper">
          <div className="container">

            
                <h1> Welcome </h1>
                <Link to="/login">To continue please click here</Link>
           

        </div>  
      </div>
  

  )
}

export default Home
