import React from 'react';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {SingleRule} from './logicsection/SingleRule';
import AddRuleButton from './logicsection/AddRuleButton';

// import TransitionRule from 'transitions/TransitionRule';
import {Transition} from 'react-spring/renderprops';


const StyledWrapper = styled.div`
  display: flex;
  align-items: stretch;
  border: 3px solid white;
  border-bottom: 0;

  &:last-of-type {
    border-bottom: 3px solid white;
  }
`;

const StyledRotatedTitle = styled.div`
  position: relative;
  flex-grow: 0;
  width: 40px;
  min-height: 100px;
  background: #444444;
  color: white;

  h5 {
    position: absolute;
    top: calc( 50% + 17px);
    transform: rotate(-90deg);
    transform-origin: top left 0;
    width: 80px;
    padding-top: 8px;
    text-align: center;
    font-size: 14px;
  }
`;

const StyledSingleRules = styled.div`
  position: relative;
  flex-grow: 1;

  label {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const LogicSection = ({ heading, label, rules=[], allRules }) => {

  const dummyOptions = [
    "hrsa",
    "nwhfc",
    "learndash"
  ];

  const detectError = ( rules ) => { // Empty array to start.
    // console.log( "rules is ", rules );
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

  const isFirstRule = ( label, index, allRules ) => {
    if ( index !== 0 ) {
      console.log("index === 0");
      return false
    }

    if ( label === "categories" ) {
      console.log("label === categories");
      return true
    }

    if ( label === "tags" && allRules.categories.length === 0 ) {
      console.log("label === tags && other conditions met.");
      return true
    }

    if ( label === "postTypes" && allRules.categories.length === 0 && allRules.tags.length === 0 ) {
      console.log("label === postTypes && other conditions met.");
      return true
    }

    console.log("No conditions met.");
    return false;
  }


  const singleRules = rules.map( ( rule, index ) => {

    const error = ( index === errorIndex ) ? true : false; // === so that int(0) !== bool(false).
    // console.log( `Error value is ${error} for SingleRule ${index}.` );

    const isFirst = isFirstRule( label, index, allRules );

    return (
      <SingleRule
        heading={ heading }
        label={ label }
        error={ error }
        key={ index }
        index={ index }
        rule={ rule }
        isFirst={ isFirst }
        options={ dummyOptions }
      />
    );

  } );

  return(
    <StyledWrapper>

      <StyledRotatedTitle>
        <h5>{ heading }</h5>
      </StyledRotatedTitle>

      <StyledSingleRules>
        <Transition
          items={ singleRules }
          keys={ singleRule => singleRule.key }
          config={{ mass: 1, tension: 300, friction: 30 }}
          from={{ opacity: 0 }}
          enter={{ opacity: 1}}
          leave={{ opacity: 0 }}
        >
          {singleRule => transitionProps => <div style={ transitionProps }>{singleRule}</div>}
        </Transition>

        { /* singleRules */ }

        <AddRuleButton text={ heading } label={ label }/>
      </StyledSingleRules>

    </StyledWrapper>
  );
};


//////////////////////////////////////////
LogicSection.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  allRules: PropTypes.object.isRequired,
}
//////////////////////////////////////////
