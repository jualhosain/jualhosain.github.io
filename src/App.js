import React, {useEffect} from 'react'
import Nav from './navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Project from './Project'

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/project'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
