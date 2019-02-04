import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import PositionPicker from './PositionPicker';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <PositionPicker />
    </Provider>
  );

});
