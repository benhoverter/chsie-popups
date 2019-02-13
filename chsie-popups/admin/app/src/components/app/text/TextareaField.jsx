import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {updateField} from 'store/actions';

import InnerRow from 'shared/InnerRow';


const StyledLabel = styled.label`
  display: inline-block;
  text-align: right;
  width: 90px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 13px;
`;

const StyledFieldWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 78%;
  // margin-left: 26px;

  span {
    display: block;
    margin: 4px 0;
    font-size: 12px;
    font-style: italic;
    color: #444444;
  }
`;

const StyledTextarea = styled.textarea`
  padding: 4px 6px;
  width: 98%;
  font-size: 13px;
  font-family: Tahoma, sans-serif;
  border: 1.5px solid #909090;

  &::placeholder {
    color: #444444;
    opacity: 0.5;
  }
`;



const TextareaField = ({ label, text, placeholder, autoFocus, fieldInfo, view, handleChange }) => {

  const value = view.popup[label];
  const cssId = "popup-" + label;

  return (

    <InnerRow>

      <StyledLabel htmlFor={ cssId } >{ text }:</StyledLabel>
      <StyledFieldWrapper>
        <StyledTextarea
          id={ cssId }
          name={ cssId }
          autoFocus={ autoFocus && value === "" }
          value={ value }
          onChange={ (e) => handleChange( e, label ) }
          placeholder={ placeholder }
        />

        <span>{ fieldInfo }</span>
      </StyledFieldWrapper>
    </InnerRow>

  );
};

//////////////////////////////////////////
TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  fieldInfo: PropTypes.string.isRequired,
  view: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  label: ownProps.label,
  text: ownProps.text,
  placeholder: ownProps.placeholder,
  fieldInfo: ownProps.fieldInfo,
  active:  state.visibility.TextSection !== 'CLOSED',
  view: state.view
});


const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    // dispatch( updateName( getValue( e ) ) );
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( TextareaField );
