import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import SignIn from './components/SignIn';
import ContentPage from './components/ContentPage'
import Navigation from './components/Navigation';
import HomePageAdministration from './components/Administration/HomePageAdministration'
import Inscription from './components/Administration/Inscription'


function App() {
  return (
    <Router >
  <Switch>
    <Route component={Inscription} exact path="/"  />
    <Route component={HomePageAdministration} exact path="/home"  />

    <Route component={HomePage} exact path="/home12"  />
      </Switch> 
      </Router>
  );
}

export default App;
