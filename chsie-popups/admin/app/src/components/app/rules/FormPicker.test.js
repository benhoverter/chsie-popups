import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import FormPicker from './FormPicker';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <FormPicker />
    </Provider>
  );

});
