import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import AddNewFriend from './components/AddNewFriend'
import PrivateRoute from './components/PrivateRoute'
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
              <Link to="/addNewFriend">Add New Friend</Link>
            </li>
        </ul>
        <Switch>
          <PrivateRoute path="/addNewFriend" component={AddNewFriend} />
          <Route path="/login" component={Login} />

        </Switch>
      </div>
      </Router>
      
      
    </div>
  );
}

export default App;
