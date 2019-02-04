import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import Logic from './Logic';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <Logic />
    </Provider>
  );

});
