import React from 'react';
import {shallow} from 'enzyme';

import {RuleWarning} from './RuleWarning';


it('renders without crashing', () => {
  shallow(
    <RuleWarning
      heading='TestHeading'
      error={ true }
    />
  );
});
