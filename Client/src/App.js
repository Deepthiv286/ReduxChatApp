import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Route path='/' exact component={Login} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Registration}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
