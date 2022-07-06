import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import SignIn from './components/SignIn';
import ContentPage from './components/ContentPage'
import Navigation from './components/Navigation';


function App() {
  return (
    <Router >
  <Switch>
    <Route component={SignIn} exact path="/"  />
    <Route component={ContentPage} exact path="/home"  />

    <Route component={HomePage} exact path="/home12"  />
    <Route component={Navigation} exact path="/navigation"  />
      </Switch> 
      </Router>
  );
}

export default App;
