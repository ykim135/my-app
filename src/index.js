import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/App/route'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { sort } from './reducers/reducer'

const middleware = server => [ thunk ];

const storeFactory = (server = false, initialState = {}) =>
  applyMiddleware(...middleware(server))(createStore)(
    sort,
    initialState
  );

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
