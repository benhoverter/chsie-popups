import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled, {css} from 'styled-components';

import { updateRule } from 'store/actions';

// import './_css/IsIsntRadios.css';


const StyledWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledLabel = styled.label`
  display: block;
  opacity: 0.5;
  transition: 0.15s all ease-out;

  ${ props => props.checked && css`
    opacity: 1;
  ` }
`;


export const IsIsntRadios = ({ label, value = "$", index, handleChange }) => {

  return (
    <StyledWrapper>

      <StyledLabel checked={ value === "$" ? true : false }>
        <input
          type="radio"
          value="$"
          name={ label + "-is-isnt-" + index }
          checked={ value === "$" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        is...
      </StyledLabel>

      <StyledLabel checked={ value === "!" ? true : false }>
        <input
          type="radio"
          value="!"
          name={ label + "-is-isnt-" + index }
          checked={ value === "!" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        isn't...
      </StyledLabel>

    </StyledWrapper>
  );
};

//////////////////////////////////////////
IsIsntRadios.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};
//////////////////////////////////////////



const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, label, index ) => {
    dispatch( updateRule( e.target.value, label, index ) );
  }
});

export default connect( null, mapDispatch )( IsIsntRadios );
