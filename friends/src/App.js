import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
  <Router>
    <div className="App">
      <h2>Client Auth Project</h2>

      {/* <Switch> */}
        {/* <Route path="/friends">
          <Friends />
        </Route> */}
        <PrivateRoute path="/friends">
          <FriendsList />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Login />
        </Route>
      {/* </Switch> */}
    </div>
  </Router>
    
  );
}

export default App;
