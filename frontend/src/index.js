import React from 'react';
import ReactDOM from 'react-dom';
import './css/imports.css';
import './index.css'
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import * as serviceWorker from './serviceWorker';

// as shown in react-redux document to make the Redux store available
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
