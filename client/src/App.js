import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css'
import Nav from 'react-bootstrap/Nav'

import logo from './imgs/logo.png'
import Home from './Home.js'
import SearchResults from './SearchResults'

function App() {
  return (
    <Router>
      <Nav>
        <Nav.Link href="/">
          <img src={logo} className="navLogo" alt="logo" />
          <div className="stackoverflow">
            StackOverflow
          </div>
          <div className="scraper">
            SCRAPER
          </div>
        </Nav.Link>
      </Nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/searchResults'>
            <SearchResults />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
