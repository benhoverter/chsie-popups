import React from 'react';

import Column from 'shared/Column';
// import Section from 'shared/Section';

import NameSelect from './select/NameSelect';
import NewButton from './select/NewButton';
import SaveButton from './select/SaveButton';
import DelButton from './select/DelButton';


export const SelectSection = () => (
  <React.Fragment>
    <Column side="left">
      <NameSelect />
      <SaveButton />
      <NewButton />
    </Column>

    <Column side="right">
        <DelButton />
    </Column>
  </React.Fragment>
);
