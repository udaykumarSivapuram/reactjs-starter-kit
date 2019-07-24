import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../src/screens/Login';
import Dashboard from '../src/screens/Dashboard';
import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
        </Switch>
      </Router>

    </div>
  );
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps)(App)
