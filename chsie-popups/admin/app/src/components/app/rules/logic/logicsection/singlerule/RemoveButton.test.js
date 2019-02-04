import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import RemoveButton from './RemoveButton';


it('renders without crashing', () => {
  shallow(
    <Provider store={ store }>
      <RemoveButton
        label='testlabel'
        index={99999}
      />
    </Provider>
  );
});
