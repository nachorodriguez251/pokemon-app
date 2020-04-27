import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './base/store';
import Home from './containers/Home';
import Selection from './containers/Selection';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/selection">
          <Selection />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
