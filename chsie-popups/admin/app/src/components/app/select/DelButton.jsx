import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import Button from 'shared/Button';

import { deletePopup } from 'store/actions';

const DelButton = ({ view, visibility, popups, handleClick }) => (

  <Button
    float="right"
    margin="0"
    disabled={ view.saved === true && view.id === null }
    onClick={ (e) => handleClick( e, view.id, visibility, popups, view.popup.name ) }
  >
    Delete This Popup
  </Button>

);



//////////////////////////////////////////
DelButton.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  view: state.view,
  visibility: state.visibility,
  popups: state.popups
});

const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, id, visibility, popups, name ) => {
    e.target.blur();
    const namePhrase = name === "" ? 'this' : 'the "' + name + '"';

    if ( window.confirm( 'Are you sure you want to delete ' + namePhrase + ' popup?' ) ) {
      dispatch( deletePopup( id, visibility, popups ) ); // Thunk.
    }
  }
});

export default connect( mapState, mapDispatch )( DelButton );
