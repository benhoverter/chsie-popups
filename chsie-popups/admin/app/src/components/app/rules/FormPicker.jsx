import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import { updateField } from 'store/actions';

const StyledFormPicker = styled.div`
  display: inline-block;

  label {
    margin-right: 13px;
    font-size: 13px;
    font-weight: 600;
  }

  select {
    text-align: center;
  }
`;




export const FormPicker = ({ label, id, options, view, handleChange }) => {

  const value = view.popup[label]

  const optionList = options.map( ( option, index ) => (
    <option key={index} value={ option }>{ option }</option>
  ) );

  return (

    <StyledFormPicker>
      <label htmlFor={id} >Use Form ID: </label>
      <select
        id={ id }
        name={ id }
        value={ value }
        onChange={ (e) => handleChange( e, label ) }
        >
        <option value="0" >---------</option>
        {optionList}
      </select>
    </StyledFormPicker>

  );
};


//////////////////////////////////////////
FormPicker.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  view: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  label: ownProps.label,
  id: ownProps.id,
  options: ownProps.options,
  view: state.view
});


const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( FormPicker );
