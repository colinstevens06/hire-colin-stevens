import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import NoMatch from './pages/NoMatch.js';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
