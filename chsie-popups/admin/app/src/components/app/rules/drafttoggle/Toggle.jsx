import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import { updateField } from 'store/actions';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: green;

    &::before {
      transform: translateX(24px);
    }
  }

  &:focus + span {
    box-shadow: 0 0 1px #d7d7d7;
  }
`

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .3s all ease-in-out;
  border-radius: 34px;
  background-color: #ccc;

  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    transition: .3s all ease-in-out;
    border-radius: 50%;
    background-color: white;
  }
`


const Toggle = ({ label, value, handleChange }) => {

  const labelId = label + `-toggle`

  return (
    <StyledLabel htmlFor={labelId}>
      <StyledInput
        id={labelId}
        label={label}
        type="checkbox"
        value={ value }
        checked={ value === true }
        onChange={e => handleChange( e.target.checked, label )}
      />
      <StyledSpan />
    </StyledLabel>
  );
};


//////////////////////////////////////////
Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}
//////////////////////////////////////////


export default Toggle
