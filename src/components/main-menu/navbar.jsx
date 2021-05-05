import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../App.css';

function Navbar() {              

        
  return (

    <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
    </div>
  
  )
}

export default Navbar
