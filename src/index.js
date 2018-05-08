import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/App/route'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducers';

const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
