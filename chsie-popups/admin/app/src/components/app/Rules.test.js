import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import RuleSection from './Rules';
import store from 'store';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store} >
      <RuleSection />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
