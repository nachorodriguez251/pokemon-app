import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './base/store';
import Home from './containers/Home';
import Selection from './containers/Selection';
import Modal from './containers/Modal';
import NoMatch from './containers/NoMatch';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/selection">
            <Selection />
          </Route>
          <Route path="/pokemon/:id">
            <Modal />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
