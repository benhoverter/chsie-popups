import React from 'react';
import {PropTypes} from 'prop-types';

import './_css/LogicSection.css';

import {SingleRule} from './logicsection/SingleRule';
import AddRuleButton from './logicsection/AddRuleButton';


export const LogicSection = ({ heading, label, rules }) => {

  const singleRules = rules.map( ( rule, index ) => (
    <SingleRule label={ label } key={ index } index={ index } rule={ rule } />
  ) );

  return(
    <div className="LogicSection">
      <div className="rotated">
        <h5>{ heading + ":" }</h5>
      </div>
      <div className="single-rules">
        { singleRules }
        <AddRuleButton text={ heading } label={ label }/>
      </div>
    </div>
  );
};

//////////////////////////////////////////
LogicSection.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
}
//////////////////////////////////////////
