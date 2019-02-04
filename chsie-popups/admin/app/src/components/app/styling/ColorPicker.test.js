import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import ColorPicker from './ColorPicker';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <ColorPicker />
    </Provider>
  );

});
