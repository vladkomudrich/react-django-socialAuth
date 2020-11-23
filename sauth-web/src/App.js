import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home'
import Profile from './views/Profile'

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

