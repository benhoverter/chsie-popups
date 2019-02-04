import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import {TargetSelector} from './TargetSelector';
import store from 'store';

it('renders without crashing', () => {
  shallow(
    <Provider store={ store }>
      <TargetSelector
        label='testLabel'
        value='testValue'
        index={99999}
        options={[ 'test0', 'test1', 'test2', 'test3',  ]}
        handleChange={ jest.fn }
      />
    </Provider>
  );
});
