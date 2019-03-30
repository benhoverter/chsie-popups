import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {addRule} from 'store/actions';


const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 13px;
  height: 24px;
  border: 1px solid #c0c0c0;
  background-color: #f7f7f7;
  color: #00a0d2;
  font-weight: 600;
  transition: 0.15s ease-out;

  &:hover, &:focus {
    border: 1px solid #fff;
    background-color: #00a0d2;
    color: #fff;
  }

`;

export const AddRuleButton = ({ text, label, popup, handleClick }) => {

  // const oldRules = popup.rules ? popup.rules[label] : [];
  const oldRules = popup.rules ;

  const newRule = "|$***";

  return (
      <StyledButton
        value={ label }
        onClick={ () => handleClick( label, oldRules, newRule ) }
      >
        + { text }
      </StyledButton>
  );

};

//////////////////////////////////////////
AddRuleButton.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  popup: PropTypes.object.isRequired,
  // oldRules: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  text: ownProps.text,
  label: ownProps.label,
  popup: state.view.popup,
});


const mapDispatch = (dispatch) => ({
  handleClick: ( label, oldRules, newRule ) => {

    // const oldTarget = oldRules.length === 0  ? "" :  oldRules[oldRules.length - 1].slice(2);
    // const newTarget = newRule.slice(2);
    let hasEmptyRule = false

    for ( let name in oldRules ) {
      oldRules[name].forEach( ( rule ) => {
        if ( rule === "|$***" ) {
          hasEmptyRule = true;
        }
      } )
    }

    // if ( oldTarget === newTarget ) {
    if ( hasEmptyRule ) {
      alert( "Please select a target for the empty rule before adding another rule." );
    } else {
      dispatch( addRule( label, newRule ) );
    }
  }
});

export default connect( mapState, mapDispatch )( AddRuleButton );
