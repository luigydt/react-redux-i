import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { UsersApp } from './components/UsersApp';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <UsersApp />
  </Provider>
  , document.getElementById('root'));
