import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {deletePopup, clearView, setVisibility} from 'store/actions';
import './_css/DelButton.css';

const DelButton = ({ view, visibility, handleClick }) => {

  const disabled = ( view.saved === true && view.id === null );
  const faded = disabled ? "faded" : "";
  const componentClasses = "DelButton " + faded;

  if ( visibility === 'OPEN' ) {
    return (
      <div className={ componentClasses }>
        <button disabled={ disabled } onClick={ (e) => handleClick( e, view.id, view.popup.name ) } >Delete This Popup</button>
      </div>
    );
  } else {
    return null;
  }

};


//////////////////////////////////////////
DelButton.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  view: state.view,
  visibility: state.visibility.DelButton
});

const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, id, name ) => {
    e.target.blur();
    const namePhrase = name === "" ? 'this' : 'the "' + name + '"';

    if ( window.confirm( 'Are you sure you want to delete ' + namePhrase + ' popup?' ) ) {
      dispatch( deletePopup( id ) );
      dispatch( clearView() );
      dispatch( setVisibility({
        NameSelect: 'OPEN',
        sections: 'CLOSED',
        // StylingSection: 'CLOSED',
        // RulesSection: 'CLOSED'
      }) );
    }
  }
});

export default connect( mapState, mapDispatch )( DelButton );
