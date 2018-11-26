import React from 'react';
import {connect} from 'react-redux';

import './_css/PositionPicker.css';

import {updateField} from 'store/actions';


const PositionPicker = ({ title, label, id, options, view, handleChange }) => {

  const value = view.popup[label];
  // console.log( "value is ", value );

  const optionList = options.map( ( option, index ) => (
    <div className="field-container" key={ index }>
      <label >
        <input
          type="radio"
          key={ index }
          value={ option }
          checked={ option === value }
          onChange={ ( e ) => {
            handleChange( e, label )
          } }
          />
        { option[0].toUpperCase() + option.slice(1) }
      </label>
    </div>
  ) );

  return (
    <div className="PositionPicker">
      { optionList }
    </div>
  );
};


const mapState = ( state, ownProps ) => ({
  title: ownProps.title,
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

export default connect( mapState, mapDispatch )( PositionPicker );
