import React from 'react';
import {shallow} from 'enzyme';

import {SingleRule} from './SingleRule';


it('renders without crashing', () => {
  shallow(
    <SingleRule
      heading='testHeading'
      label='testLabel'
      error={ true }
      index={ 9999 }
      rule='testRule'
      options={[ 'test0', 'test1', 'test2', 'test3',  ]}
    />
  );
});
