import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Nav />
      <Router>
        <Switch >
          <Route exact path = {["/", "/Home"]}>
            <Home />
          </Route>
          <Route exact path = {["/Projects"]}>
            <Projects />
          </Route>
          <Route exact path = {["/Contact"]}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
   
  );
}

export default App;
