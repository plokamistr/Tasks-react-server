import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./components/auth-provider"
import Navbar from "./components/main-menu/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Tasklist from "./pages/tasks-list-page";
import Profile from "./pages/profile";
import Private from "./components/private-route";

function App() {

  

  return (
    <BrowserRouter>
      
      <AuthProvider>

        <Navbar />

        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Private exact path="/tasks">
            <Tasklist />
          </Private>

          <Private exact path="/profile">
            <Profile />
          </Private>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </AuthProvider>
      
    </BrowserRouter>
  );
}

export default App;
