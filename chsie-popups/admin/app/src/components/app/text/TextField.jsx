import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { updateField } from 'store/actions';


const TextField = ({ type="text", label, text, placeholder, autoFocus, fieldInfo, view, handleChange }) => {

  const cssId = "popup-" + label;

  const value = view.popup[label];

  return (
    <div className="row">

    <div className="text-label">
      <label htmlFor={ cssId} >{ text }:</label>
    </div>

    <div className="TextField">
      <input
        id={ cssId }
        type={ type }
        name={ cssId }
        value={ value }
        autoFocus={ autoFocus && value === "" }
        onChange={ (e) => handleChange( e, label ) }
        placeholder={ placeholder }
      />
      <span className="field-info">{ fieldInfo }</span>
    </div>

    </div>
  );
};

//////////////////////////////////////////
TextField.propTypes = {
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
  active:  state.visibility.TextSection !== 'HIDE',
  view: state.view
});

const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( TextField );
