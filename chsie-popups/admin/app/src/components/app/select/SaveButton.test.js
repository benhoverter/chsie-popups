import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import SaveButton from './SaveButton';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <SaveButton />
    </Provider>
  );

});
