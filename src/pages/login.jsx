import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css'


function Login({onLogin}) {              

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let history = useHistory();


  function handleSubmit(e) {
      e.preventDefault();
      onLogin({email,pass});
      history.push("/tasks");
  }

  function handleInputEmail(e) {
      setEmail(e.target.value);
  }

  function handleInputPass(e) {
      setPass(e.target.value);
  }

  
      
  return (
    
      <div className="wrapper">
          <div className="container">

            <h1 className="decoration1"> Insert your credentials </h1>
            
            <form className="loginform" onSubmit={handleSubmit}>

              <div className="input-wrapper">
                  <input className="email-input"  type="text" placeholder="Email"  onChange={handleInputEmail}  />
                  <input className="password-input"  type="text" placeholder="Password" onChange={handleInputPass}   />
              </div>

              <div className="buttons-wrapper">
                  <button type="submit" className="btn btn-removecompletedtask"> Enter </button>
              </div>
        </form>



        </div>  
      </div>
  

  )
}

export default Login
