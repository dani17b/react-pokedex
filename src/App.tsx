import React from 'react';
import './app.scss';
import Header from './components/header/Header';
import {Home} from './modules/home/Home';
import Detail from './modules/detail/Detail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app-bg"></div>
      <Router>
        <Header />
        <Switch>   
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/pokemon/:name">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
