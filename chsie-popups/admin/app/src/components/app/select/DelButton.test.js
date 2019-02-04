import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import DelButton from './DelButton';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <DelButton />
    </Provider>
  );

});
