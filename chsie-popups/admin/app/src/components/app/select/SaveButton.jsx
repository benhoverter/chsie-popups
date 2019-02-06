import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import Button from 'shared/Button';

import { savePopup } from 'store/actions';


const SaveButton = ({ visibility, view, handleClick }) => {

  const disabled = ( view.saved === true );
  const buttonText = disabled ? "Saved" : "Save" ;

  if ( visibility === 'OPEN') {
    return (
        <Button width="56px" disabled={ disabled } onClick={ (e) => handleClick( e, view ) } >{ buttonText }</Button>
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
      dispatch( savePopup( view ) ); // For the AJAX save here, should we pass the whole store? Or view + popups?
    }
  }
});

export default connect( mapState, mapDispatch )( SaveButton );
