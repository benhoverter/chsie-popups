import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import './_css/FormPicker.css';

import { updateField } from 'store/actions';


const FormPicker = ({ label, id, options, value, handleChange }) => {

  const optionList = options.map( ( option, index ) => (
    <option key={index} value={ option }>{ option }</option>
  ) );

  return (

    <div className="FormPicker">
      <select
        id={ id }
        name={ id }
        value={ value }
        onChange={ (e) => handleChange( e, label ) }
        >
        <option value="0" >---------</option>
        {optionList}
      </select>
    </div>

  );
};

//////////////////////////////////////////
FormPicker.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////



const mapState = ( state, ownProps ) => ({
  label: ownProps.label,
  id: ownProps.id,
  options: ownProps.options,
  value: state.view.popup[ownProps.label]
});


const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( FormPicker );
