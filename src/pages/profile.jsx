import React from 'react'
import useAuth from '../hooks/useAuth';
import '../App.css'


function Profile() {              
  
  const {email} = useAuth();
  
      
  return (
    <div className="wrapper">
      <div className="container">

        <h1 className="decoration1"> Profile </h1>
        
        <p> User <strong>{email}</strong> is logged in </p>
      


      </div>
    </div>
  

  )
}

export default Profile
