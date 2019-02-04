import React from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import styled, {css} from 'styled-components';

import { setVisibility, addPopup, newPopup } from 'store/actions';

const StyledButton = styled.button`
  background: violet; // Just checking!
  margin-left: 20px;
  border: 2px solid transparent;
  transition: 0.2s ease-out;

  &:hover, &:focus {
    border: 2px solid black;
  }

  ${ props => props.disabled && css`
    pointer-events: none;
    opacity: 0.6;
  ` }
`;


const NewButton= ( { view, visibility, nextId, handleClick } ) => {

  const disabled = ( view.popup.name === "" );

  if ( visibility.NewButton === 'OPEN' ) {
    return (
        <StyledButton disabled={ disabled } onClick={ (e) => handleClick( e, view.saved, visibility, nextId ) }>Add a New Popup</StyledButton>
    );
  } else {
    return null;
  }
};

//////////////////////////////////////////
NewButton.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.object.isRequired,
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
  visibility:  state.visibility,
  nextId: nextId( state.popups ),
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
