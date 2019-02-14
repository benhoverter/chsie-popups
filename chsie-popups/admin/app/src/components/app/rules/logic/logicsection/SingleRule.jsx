import React from 'react';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import AndOrRadios from './singlerule/AndOrRadios';
import IsIsntRadios from './singlerule/IsIsntRadios';
import TargetSelector from './singlerule/TargetSelector';
import {RuleWarning} from './singlerule/RuleWarning';
import RemoveButton from './singlerule/RemoveButton';

import TransitionRule from 'transitions/TransitionRule';


const StyledAndOrRow = styled.div`
  padding: 5px 20px;
  background-color: #e7e7e7;
`;

const StyledRuleRow = styled.div`
  padding: 20px;
  background-color: #e7e7e7;

  &:last-of-type {
    padding-bottom: 40px;
  }
`;


export const SingleRule = ({ heading, label, error, index, rule, isFirst, options }) => {

  // console.log( rule );

  const aoVal = rule[0];              // pass to AndOrRadios.
  const iiVal = rule[1]               // pass to IsIsntRadios
  const targetVal = rule.slice( 2 );  // pass to TargetSelector


  const AndOrRow = ({ isFirst }) => (
    <TransitionRule visible={ !isFirst } >
      <StyledAndOrRow>
        <AndOrRadios label={ label } value={ aoVal } index={ index } />
      </StyledAndOrRow>
    </TransitionRule>
  );

  return (
    <React.Fragment>
      <AndOrRow isFirst={ isFirst } />

      <StyledRuleRow>
        <IsIsntRadios label={ label } value={ iiVal } index={ index } />
        <TargetSelector label={ label } value={ targetVal } index={ index } options={ options }/>
        <RemoveButton label={ label } index={ index } />
        <RuleWarning heading={ heading } error={ error } />
      </StyledRuleRow>
    </React.Fragment>
  );

};

//////////////////////////////////////////
SingleRule.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  rule: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
}
//////////////////////////////////////////
