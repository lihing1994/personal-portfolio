import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar.js';
import AboutMe from './component/AboutMe.js';
import Skills from './component/Skills.js';
import Experience from './component/Experience.js';
import Project from './component/Project.js';
import Contact from './component/Contact.js';
import ButtonNavBar from './component/ButtonNavBar.js';
import Education from './component/Education.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar/>
            <AboutMe/>
            <ButtonNavBar/>
          </Route>
          <Route exact path="/AboutMe">
            <NavBar/>
            <AboutMe/>
            <ButtonNavBar/>
          </Route>
          <Route exact path="/Education">
            <NavBar/>
            <Education/>
            <ButtonNavBar/>
          </Route>
          <Route exact path="/Experience">
            <NavBar/>
            <Experience/>
            <ButtonNavBar/>
          </Route>
          <Route exact path="/Projects">
            <NavBar/>
            <Project/>
            <ButtonNavBar/>
          </Route>
          <Route exact path="/Skills">
            <NavBar/>
            <Skills/>
            <ButtonNavBar/>
          </Route>
          
          <Route exact path="/Contact">
            <NavBar/>
            <Contact/>
            <ButtonNavBar/>
          </Route>
          {
          /* If user try to access a invalid page,
            redirect user to Homepage.
          */
          }
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
