import React from 'react';
import {connect} from 'react-redux';

import './_css/ColorPicker.css';

import {updateField} from 'store/actions';


const ColorPicker = ({ title, label, id, view, handleChange }) => {

  const value = view.popup[label];
  // console.log( "value is ", value );

  return (

    <div className="field-container">

      <div className="label">
        <label htmlFor={ id } >{ title }:</label>
      </div>

      <div className="ColorPicker">
        <input
          id={ id }
          type="color"
          name={ id }
          value={ value }
          onChange={ (e) => handleChange( e, label ) }
          />
      </div>
      
    </div>
  );
};


const mapState = ( state, ownProps ) => ({
  title: ownProps.title,
  label: ownProps.label,
  id: ownProps.id,
  view: state.view
});

const mapDispatch = (dispatch) => ({
  handleChange: ( e, label ) => {
    dispatch( updateField( e.target.value, label ) );
  }
});

export default connect( mapState, mapDispatch )( ColorPicker );
