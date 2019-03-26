import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import { removeRule } from 'store/actions';


const StyledButton = styled.button`
  float: right;
  height: 20px;
  vertical-align: middle;
  margin-top: 8px;
  border:  1px solid #d7d7d7;
  transition: 0.15s all ease-out;

  &:hover, &:focus {
    background-color: #444444;
    color: white;
    border-color: white;
  }
`;

export const RemoveButton = ({ label, index, handleClick }) => {
  return (
      <StyledButton
        onClick={ () => handleClick( label, index ) }
      >
        Remove this rule
      </StyledButton>
  );
};

//////////////////////////////////////////
RemoveButton.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};
//////////////////////////////////////////



const mapDispatch = (dispatch) => ({
  handleClick: ( label, index ) => {
      if ( window.confirm( "Are you sure you want to remove this rule?" ) ) {
        dispatch( removeRule( label, index ) );
      }
  }
});

export default connect( null, mapDispatch )( RemoveButton );
