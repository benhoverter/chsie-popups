import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import AndOrRadios from './AndOrRadios';


it('renders without crashing', () => {
  shallow(
    <Provider store={ store } >
      <AndOrRadios
        label='testlabel'
        value='|'
        index={99999}
      />
    </Provider>
  );
});
