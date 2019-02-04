import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {selectPopup, setVisibility, clearView} from 'store/actions';


const NameSelect = ({ saved, visibility, selected, popups, handleChange }) => {

  const ids = Object.keys( popups );
  const options = ids.map( id => (
    <option
      key={ id }
      thiskey={ id }
      value={ popups[id].name }
      >
      { popups[id].name }
    </option>
  ) );

  const disabled = visibility === 'FADE';
  const faded = disabled ? "faded" : "";
  const componentClasses = "NameSelect " + faded;

  return (
    <div className={ componentClasses }>
      <span>Select a popup:</span>
      <select
        name="name-select"
        id="name-select"
        disabled={ disabled }
        value={ faded ? "" : selected }
        onChange={ (e) => handleChange( e, saved, popups ) }
        >
        <option value="" >-------------</option>
        {options}
      </select>
    </div>
  );
};

//////////////////////////////////////////
NameSelect.propTypes = {
  saved: PropTypes.bool.isRequired,
  visibility: PropTypes.string.isRequired,
  selected: PropTypes.string,
  popups: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  saved: state.view.saved,
  selected: state.view.popup.name,
  visibility: state.visibility.NameSelect,
  popups: state.popups
});


//  Dispatch helpers  //
const getIndexFromTarget = ( target ) => {
  return target.options.selectedIndex;
};

const getIdByIndex = ( target, selectedIndex ) => {
  const popupId = Number( target.options[getIndexFromTarget( target )].getAttribute( 'thiskey' ) );
  return popupId;
};

const dispatchDefaultSelect = ( dispatch ) => {
  dispatch( clearView() );
  dispatch( setVisibility({
    TextSection: 'CLOSED',
    StylingSection: 'CLOSED',
    RulesSection: 'CLOSED'
  }) );
};

const dispatchPopupSelect = ( dispatch, id, popups ) => {
  dispatch( selectPopup( id, popups[id] ) );
  dispatch( setVisibility({
    TextSection: 'OPEN',
    StylingSection: 'OPEN',
    RulesSection: 'OPEN'
  }) );
};
//  END OF Dispatch helpers  //


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, saved, popups ) => {
    e.target.blur();

    const selectedIndex = getIndexFromTarget( e.target );
    const id = getIdByIndex( e.target, selectedIndex );

    if ( saved || window.confirm( "Popup is not saved.  Load selected popup anyway?" ) ) {

      if ( selectedIndex === Number( 0 ) ) {
        dispatchDefaultSelect( dispatch );
      } else {
        dispatchPopupSelect( dispatch, id, popups );
      }
    }
  }
});

export default connect( mapState, mapDispatch )( NameSelect );
