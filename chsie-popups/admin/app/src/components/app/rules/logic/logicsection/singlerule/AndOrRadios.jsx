import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled, {css} from 'styled-components';

import { updateRule } from 'store/actions';


const StyledWrapper = styled.div`
  padding-left: 16px;
`;

const StyledLabel = styled.label`
  margin-right: 16px;
  opacity: 0.5;
  transition: 0.15s all ease-out;

  ${ props => props.checked && css`
    opacity: 1;
  ` }
`;


export const AndOrRadios = ({ label, value = "|", index, handleChange }) => {

  return (
    <StyledWrapper>

      <StyledLabel checked={ value === "|" ? true : false } >
        <input
          type="radio"
          value="|"
          name={ label + "-and-or-" + index }
          checked={ value === "|" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        OR
      </StyledLabel>

      <StyledLabel checked={ value === "&" ? true : false }>
        <input
          type="radio"
          value="&"
          name={ label + "-and-or-" + index }
          checked={ value === "&" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        AND
      </StyledLabel>

    </StyledWrapper>
  );
};

//////////////////////////////////////////
AndOrRadios.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, label, index ) => {
    dispatch( updateRule( e.target.value, label, index ) )
  }
});

export default connect( null, mapDispatch )( AndOrRadios );
