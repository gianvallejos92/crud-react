import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import data from '../testData.json';

const appElement = document.getElementById('app');
const store = createStore(reducer, data);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement,
);
