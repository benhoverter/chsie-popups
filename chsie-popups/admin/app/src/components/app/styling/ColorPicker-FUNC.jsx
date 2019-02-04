import React from 'react';
import {connect} from 'react-redux';
import {ChromePickerModal} from './colorpicker/ChromePickerModal';

import './_css/ColorPicker.css';

import {updateField} from 'store/actions';


const ColorPicker = ({ title, label, id, view, handleChangeComplete }) => {

  const hexColor = view.popup[label];
  const pickerBorder = {
    border: "4px solid " + hexColor,
  }

  let showModal = false;

  const handleClick = () => {
    showModal = !showModal;
  }

  const modal = showModal ? (
    <ChromePickerModal
      label={label}
      hexColor={hexColor}
      handleChangeComplete={handleChangeComplete}
    />
  )
  : null;


  return (
    <div className="field-container">

      <div className="label">
        <span htmlFor={ id } >{ title }:</span>
      </div>

      <div className="ColorPicker" onClick={ handleClick }>
        <div style={pickerBorder}>
          <span>{hexColor}</span>
        </div>

        {modal}

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
  handleChangeComplete: ( color, label ) => {
    dispatch( updateField( color.hex, label ) );
  }
});

export default connect( mapState, mapDispatch )( ColorPicker );
