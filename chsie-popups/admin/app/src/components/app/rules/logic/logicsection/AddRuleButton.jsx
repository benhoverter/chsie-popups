import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {addRule} from 'store/actions';


const StyledButton = styled.button`
  position: absolute;
  right: 13px;
  bottom: 13px;
`;

export const AddRuleButton = ({ text, label, popup, handleClick }) => {

  const oldRules = popup.rules ? popup.rules[label] : [];

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

    const oldTarget = oldRules.length === 0  ? "" :  oldRules[oldRules.length - 1].slice(2);
    const newTarget = newRule.slice(2);

    if ( oldTarget === newTarget ) {
      alert( "Please select a target for the last rule before adding another rule." );
    } else {
      dispatch( addRule( label, newRule ) );
    }
  }
});

export default connect( mapState, mapDispatch )( AddRuleButton );
