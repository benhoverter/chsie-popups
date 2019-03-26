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
    text-align: left;
    padding: 0 5px;
  }
`;




export const FormPicker = ({ label, id, forms, view, handleChange }) => {

  const value = view.popup[label]

  console.log(`forms is`, forms);

  const optionList = []
  for ( let formId in forms ) {
    let name = forms[formId].name
    optionList.push(
      <option key={formId} value={ formId }>{ name }</option>
    )
  }
  console.log(`optionList is`, optionList);

  // const optionList = options.map( ( option, index ) => (
  //   <option key={index} value={ option }>{ option }</option>
  // ) );

  return (

    <StyledFormPicker>
      <label htmlFor={id} >Use Form: </label>
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
  forms: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  label: ownProps.label,
  id: ownProps.id,
  forms: state.data.forms,
  view: state.view
});


const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( FormPicker );
