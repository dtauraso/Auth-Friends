import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  return (
    <div className="App">
      <Router>

      <div className="App">
        <ul>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
        </ul>
        <Route path="/login" component={Login} />
      </div>
      </Router>
      
      
    </div>
  );
}

export default App;
