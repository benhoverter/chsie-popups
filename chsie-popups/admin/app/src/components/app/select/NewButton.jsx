import React from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';

import { setVisibility, addPopup } from 'store/actions';


const NewButton= ( { view, visibility, nextId, handleClick } ) => {

  const disabled = ( view.popup.name === "" );
  const faded = disabled ? "faded" : "";
  const componentClasses = "NewButton " + faded;

  if ( visibility !== 'HIDE' ) {
    return (
      <div className={componentClasses}>
        <button disabled={ disabled } onClick={ (e) => handleClick( e, view.saved, nextId ) }>Add a New Popup</button>
      </div>
    );
  } else {
    return null;
  }
};

//////////////////////////////////////////
NewButton.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.string.isRequired,
  nextId: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const nextId = ( popups ) => {
  const keys = Object.keys( popups ) // empty array to start.

  if (keys.length === 0) {
    return 0;
  }
  const numkeys = keys.map( key => Number(key) );
  return Math.max( ...numkeys ) + 1;
}


const mapState = ( state ) => ({
  view: state.view,
  visibility:  state.visibility.NewButton,
  nextId: nextId( state.popups ),
});


const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, saved, nextId ) => {
    e.target.blur();
    const toFocus = document.getElementById( "popup-name" );
    if ( toFocus !== null ) {
      toFocus.focus();
    }

    if ( saved || window.confirm( "Your current popup is not saved.  Add a new popup anyway?" ) ) {
      dispatch( addPopup( nextId ) );
      dispatch( setVisibility({
        TextSection: 'SHOW',
        StylingSection: 'SHOW',
        RulesSection: 'SHOW'
      }) );
    }

  }
});

export default connect( mapState, mapDispatch )( NewButton );
