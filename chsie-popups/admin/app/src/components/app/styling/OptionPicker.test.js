import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import OptionPicker from './OptionPicker';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <OptionPicker />
    </Provider>
  );

});
