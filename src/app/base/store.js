/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../containers/Selection/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
