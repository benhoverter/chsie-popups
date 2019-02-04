import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import RulesSection from './RulesSection';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <RulesSection />
    </Provider>
  );

});
