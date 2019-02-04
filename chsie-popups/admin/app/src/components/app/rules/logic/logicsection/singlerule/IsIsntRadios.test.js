import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import IsIsntRadios from './IsIsntRadios';


it('renders without crashing', () => {
  shallow(
    <Provider store={ store }>
      <IsIsntRadios
        label='testlabel'
        value='$'
        index={99999}
      />
    </Provider>
  );
});
