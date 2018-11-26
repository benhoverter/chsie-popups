import React from 'react';

import NameSelect from './select/NameSelect';
import NewButton from './select/NewButton';
import SaveButton from './select/SaveButton';
import DelButton from './select/DelButton';

import './_css/Select.css';


export const SelectSection = () => (
  <div className="SelectSection section">
  <div className="buttons col-1-of-2">
    <NameSelect />
    <SaveButton />
    <NewButton />
  </div>
  <div className="buttons col-1-of-2">
      <DelButton />
  </div>

  </div>
);
