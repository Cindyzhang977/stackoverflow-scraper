import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css'
import Nav from 'react-bootstrap/Nav'

import logo from './imgs/logo.png'
import Home from './Home.js'
import SearchResults from './SearchResults'

function App() {
  const [text, setText] = useState("hi")

  // useEffect(() => {
  //   fetch('/hello-world').then(res => res.json()).then(json => setText(json.text))
  // }, [])

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
      {/*<p>{text}</p>*/}
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
