import React from 'react';

import Column from 'shared/Column';
import Section from 'shared/Section';

import NameSelect from './select/NameSelect';
import NewButton from './select/NewButton';
import SaveButton from './select/SaveButton';
import DelButton from './select/DelButton';

import './_css/Select.css';


export const SelectSection = () => (
  <Section background="light">

    <Column side="left">
      <NameSelect />
      <SaveButton />
      <NewButton />
    </Column>

    <Column side="right">
        <DelButton />
    </Column>

  </Section>
);
