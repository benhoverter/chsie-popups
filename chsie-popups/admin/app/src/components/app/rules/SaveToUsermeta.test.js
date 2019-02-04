import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import SaveToUsermeta from './SaveToUsermeta';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <SaveToUsermeta />
    </Provider>
  );

});
