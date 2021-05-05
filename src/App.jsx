import React, {useState} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/main-menu/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Tasklist from "./pages/tasks-list-page";
import Profile from "./pages/profile";

function App() {

  const [user, setUser]= useState({email:"", pass:""});
  console.log (user)


  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/login">
          <Login  onLogin={setUser}/>
        </Route>

        <Route exact path="/tasks">
          <Tasklist />
        </Route>

        <Route exact path="/profile">
          <Profile email ={user.email}/>
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
