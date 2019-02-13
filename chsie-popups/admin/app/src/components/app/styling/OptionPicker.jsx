import React from 'react';
import {connect} from 'react-redux';

import FieldContainer from 'shared/FieldContainer';

import {updateField} from 'store/actions';


const OptionPicker = ({ title, label, id, options, view, handleChange }) => {

  const value = view.popup[label];
  // console.log( "value is ", value );

  const optionList = options.map( ( option, index ) => (
    <option key={index} value={option}>{option}</option>
  ) );

  return (

    <FieldContainer title={ title } htmlFor={ id } >

      <div className="OptionPicker">
        <select
          id={ id }
          name={ id }
          value={ value }
          onChange={ (e) => handleChange( e, label ) }
        >
          {optionList}
        </select>
      </div>

    </FieldContainer>
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

export default connect( mapState, mapDispatch )( OptionPicker );
