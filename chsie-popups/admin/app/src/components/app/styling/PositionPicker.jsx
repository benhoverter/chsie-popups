import React from 'react';
import {connect} from 'react-redux';

import FieldContainer from 'shared/FieldContainer';

import {updateField} from 'store/actions';


const PositionPicker = ({ title, label, id, options, view, handleChange }) => {

  const value = view.popup[label];
  // console.log( "value is ", value );

  const optionList = options.map( ( option, index ) => (
    <FieldContainer
      type="position"
      thisKey={ index }
      key={ index }
      htmlFor={ option }
      title={  option[0].toUpperCase() + option.slice(1)  }
    >
      <input
        type="radio"
        key={ index }
        id={ option }
        value={ option }
        checked={ option === value }
        onChange={ ( e ) => {
          handleChange( e, label )
        } }
      />
    </FieldContainer>
  ) );

  return (
    <div className="PositionPicker" style={{ marginLeft: "78px" }}>
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
