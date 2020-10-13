import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Line from './Line';
import Login from './Login';
import Home from './Home'
import Header from './Header.js';
import Insidecards from './Insidecards';
import  SimpleSlider from './Corousel.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Group from './Group';
function App() {
  return (
  
  <Router>
    <div>

      <Switch>
<Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Insidecards} />
          <Route exact path="/login" component={Login} />

      </Switch>

    </div>
  </Router>
);

}

export default App;
