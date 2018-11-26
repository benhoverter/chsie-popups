import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import store from 'store';



const appTarget = document.getElementById('chsie_popups_app');

ReactDOM.render(
  (
    <Provider store={store} >
      <App />
    </Provider>
  ),
  appTarget
);
