import React from 'react';
import {shallow} from 'enzyme';

import {SectionRow} from './SectionRow';


it('renders without crashing', () => {

  shallow(
      <SectionRow />
  );

});
