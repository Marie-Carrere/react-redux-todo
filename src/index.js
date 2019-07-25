import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../src/components/App/App'
import reducer from './reducers/index'
import 'todomvc-app-css/index.css'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
