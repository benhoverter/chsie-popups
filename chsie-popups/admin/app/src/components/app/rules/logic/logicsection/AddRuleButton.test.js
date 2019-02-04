import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from 'store';

import AddRuleButton from './AddRuleButton';


it('renders without crashing', () => {
  shallow(
    <Provider store={ store }>
      <AddRuleButton
        label='categories'
        text='testText'
        oldRules={[ 'test0', 'test1', 'test2', 'test3',  ]}
      />
    </Provider>
  );
});
