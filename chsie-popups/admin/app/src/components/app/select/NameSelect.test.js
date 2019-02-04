import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import NameSelect from './NameSelect';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <NameSelect />
    </Provider>
  );

});
