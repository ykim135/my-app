import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/App/route'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {issueTidReducer, reducer} from './reducers/reducers'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
