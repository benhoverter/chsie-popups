import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import NewButton from './NewButton';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <NewButton />
    </Provider>
  );

});
