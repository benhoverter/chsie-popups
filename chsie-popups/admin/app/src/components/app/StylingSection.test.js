import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import StylingSection from './StylingSection';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <StylingSection />
    </Provider>
  );

});
