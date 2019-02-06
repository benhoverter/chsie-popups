import React from 'react';
import {PropTypes} from 'prop-types';

import './_css/LogicSection.css';

import {SingleRule} from './logicsection/SingleRule';
import AddRuleButton from './logicsection/AddRuleButton';


export const LogicSection = ({ heading, label, rules=[] }) => {

  const dummyOptions = [
    "hrsa",
    "nwhfc",
    "learndash"
  ];

  const detectError = ( rules ) => { // Empty array to start.
    console.log( "rules is ", rules );
    if( rules === undefined ) { return false; }

    // Returns the index of the duplication error in rules[], or false if none are found.
    const targets = rules.map( ( rule ) => (
      rule.slice(2)
    ) );

    for( let i = 0; i < targets.length; i++ ) {
      for( let k = i + 1; k < targets.length; k++ ) {
        if( targets[i] === targets[k] ) {

          // console.log( `Error at target ${k}: ${targets[k]} is duplicated.` );
          return k;
        }
      }
    }
    return false;
  };

  const errorIndex = detectError( rules ); // Int or bool(false)

  const singleRules = rules.map( ( rule, index ) => {

    const error = ( index === errorIndex ) ? true : false; // === for int(0) to bool(false) comparison.
    // console.log( `Error value is ${error} for SingleRule ${index}.` );

    return (
      <SingleRule
        heading={ heading }
        label={ label }
        error={ error }
        key={ index }
        index={ index }
        rule={ rule }
        options={ dummyOptions }
      />
    );
  } );

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
