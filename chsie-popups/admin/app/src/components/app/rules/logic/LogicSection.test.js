import React from 'react';
import {shallow} from 'enzyme';

import {LogicSection} from './LogicSection';


it('renders without crashing', () => {

  shallow(
      <LogicSection
        heading='testHeading'
        label='categories'
        rules={[ '$|***', '!|***', '$&***', '!&***',  ]}
      />
  );

});
