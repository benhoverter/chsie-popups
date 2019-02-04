import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import {SelectSection} from './SelectSection';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <SelectSection />
    </Provider>
  );

});
