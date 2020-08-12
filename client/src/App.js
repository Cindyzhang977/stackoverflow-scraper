import React, { useState, useEffect } from 'react'
import './styles/App.css'
import Nav from 'react-bootstrap/Nav'

import logo from './imgs/logo.png'
import Home from './Home.js'

function App() {
  const [text, setText] = useState("hi")

  useEffect(() => {
    fetch('/hello-world').then(res => res.json()).then(json => setText(json.text))
  }, [])

  return (
    <div className="App">
      <Nav>
        <Nav.Link href="/">
          <img src={logo} className="navLogo" />
          <div className="stackoverflow">
            StackOverflow
          </div>
          <div className="scraper">
            SCRAPER
          </div>
        </Nav.Link>
      </Nav>
      {/*<p>{text}</p>*/}
      <Home />
    </div>
  );
}

export default App;
