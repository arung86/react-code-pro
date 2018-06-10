import React, { Component } from 'react';
import { HashRouter as Router, Route,  NavLink } from 'react-router-dom';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( 
      <Router basename="/react-auth-ui">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form"></div>
          <img src={logo} height="30" width="30" />
          <div className="PageSwitcher">
            <NavLink to="/sign-in">SignIn</NavLink>
            <NavLink exact to="/">SignUp</NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/sign-in">SignIn</NavLink>
          </div>
          <Route exact path="/" component={SignUpForm}>          
          </Route>
          <Route path="/sign-in" component={SignInForm}>
          </Route>
        </div>
        </Router>
        );
    }
}

export default App;
