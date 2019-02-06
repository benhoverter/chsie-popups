import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Button from 'shared/Button';

import { newPopup } from 'store/actions';


const NewButton= ( { view, visibility, popups, handleClick } ) => {

  const getNextId = ( popups ) => {
    const keys = Object.keys( popups ) // empty array to start.

    if (keys.length === 0) {
      return 0;
    }
    const numkeys = keys.map( key => Number(key) );
    return Math.max( ...numkeys ) + 1;
  }

  const nextId = getNextId( popups );

  const disabled = ( view.popup.name === "" );

  if ( visibility.NewButton === 'OPEN' ) {
    return (
        <Button disabled={ disabled } onClick={ (e) => handleClick( e, view.saved, visibility, nextId ) }>Add a New Popup</Button>
    );
  } else {
    return null;
  }
};

//////////////////////////////////////////
NewButton.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.object.isRequired,
  popups: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  view: state.view,
  visibility:  state.visibility,
  popups: state.popups
  // nextId: nextId( state.popups ),
});


const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, saved, visibility, nextId ) => {
    e.target.blur();
    const toFocus = document.getElementById( "popup-name" );
    if ( toFocus !== null ) {
      toFocus.focus();
    }

    if ( saved || window.confirm( "Your current popup is not saved.  Add a new popup anyway?" ) ) {
        dispatch( newPopup( visibility, nextId ) );
    }
  }
});

export default connect( mapState, mapDispatch )( NewButton );
