import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import TextSection from './TextSection';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <TextSection />
    </Provider>
  );

});
