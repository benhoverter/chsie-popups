import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import TextareaField from './TextareaField';


it('renders without crashing', () => {

  shallow(
    <Provider store={ store }>
      <TextareaField />
    </Provider>
  );

});
