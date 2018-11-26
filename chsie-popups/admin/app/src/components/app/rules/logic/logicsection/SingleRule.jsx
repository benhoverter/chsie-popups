import React from 'react';
import {PropTypes} from 'prop-types';

import AndOrRadios from './singlerule/AndOrRadios';
import IsIsntRadios from './singlerule/IsIsntRadios';
import TargetSelector from './singlerule/TargetSelector';
import RemoveButton from './singlerule/RemoveButton';

import './_css/SingleRule.css';

const dummyTargets = [
  "hrsa",
  "nwhfc",
  "learndash"
];


export const SingleRule = ({ label, index, rule }) => {

  console.log( rule );

  const aoVal = rule[0];              // pass to AndOrRadios.
  const iiVal = rule[1]               // pass to IsIsntRadios
  const targetVal = rule.slice( 2 );  // pass to TargetSelector


  const andOrRow = label !== "categories" || index > 0
  ? (
    <div className="row narrow">
      <AndOrRadios label={ label } value={ aoVal } index={ index } />
    </div>
  )
  : null;


  return (
    <div className="SingleRule" >

      { andOrRow }

      <div className="row">
        <IsIsntRadios label={ label } value={ iiVal } index={ index } />
        <TargetSelector label={ label } value={ targetVal } index={ index } options={ dummyTargets }/>
        <RemoveButton label={ label } index={ index } />
      </div>
    </div>
  );

};

//////////////////////////////////////////
SingleRule.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  rule: PropTypes.string.isRequired
}
//////////////////////////////////////////
