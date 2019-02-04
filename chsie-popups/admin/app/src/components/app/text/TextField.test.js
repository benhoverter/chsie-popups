import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import TextField from './TextField';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <TextField />
    </Provider>
  );

});
