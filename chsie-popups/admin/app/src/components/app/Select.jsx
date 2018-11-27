import React from 'react';

import NameSelect from './select/NameSelect';
import NewButton from './select/NewButton';
import SaveButton from './select/SaveButton';
import DelButton from './select/DelButton';

import './_css/Select.css';


export const SelectSection = () => (
  <div className="SelectSection">
  <div className="buttons left-col">
    <NameSelect />
    <div className="button-wrapper">
      <SaveButton />
      <NewButton />
    </div>
  </div>
  <div className="buttons right-col">
      <DelButton />
  </div>

  </div>
);
