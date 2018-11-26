import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { savePopup } from 'store/actions';


const SaveButton = ({ visibility, view, handleClick }) => {

  const disabled = ( view.saved === true );
  const buttonText = disabled ? "Saved" : "Save" ;
  const faded = disabled ? "faded" : "";
  const componentClasses = "SaveButton " + faded;


  if ( visibility !== 'HIDE') {
    return (
      <div className={ componentClasses } >
        <button disabled={ disabled } onClick={ (e) => handleClick( e, view ) } >{ buttonText }</button>
      </div>
    );
  } else {
    return null;
  }
};

//////////////////////////////////////////
SaveButton.propTypes = {
  visibility: PropTypes.string.isRequired,
  view: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////

const mapState = ( state ) => ({
  visibility:  state.visibility.SaveButton,
  view: state.view
});

const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, view ) => {
    e.target.blur();
    if ( view.popup.name === "" ) {
      alert( "Please give this popup a name before saving it." );
      document.getElementById( 'popup-name').focus();
    } else {
      dispatch( savePopup( view ) );
    }
  }
});

export default connect( mapState, mapDispatch )( SaveButton );
