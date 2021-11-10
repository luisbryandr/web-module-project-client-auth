import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';



function App() {
  return (
  <Router>
    <div className="App">
      <h2>Client Auth Project</h2>

      <Switch>
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
