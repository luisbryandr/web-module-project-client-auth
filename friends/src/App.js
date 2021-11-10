import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';




function App() {
  return (
  <Router>
    <div className="App">
      <h2>Client Auth Project</h2>

      {/* <Switch> */}
        {/* <Route path="/friends">
          <Friends />
        </Route> */}
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
