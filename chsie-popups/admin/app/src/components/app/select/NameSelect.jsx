import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import styled, { css } from 'styled-components';

import { getSelectedPopup } from 'store/actions';

// const StyledWrapper = styled.div`
//   display: inline-block; // Testing.
// `;
const wrapperStyle = { display: "inline-block" };

const StyledNameSelect = styled.select`
  margin-left: 10px;
  min-width: 200px;
  height: 1.7em;
  border: 1.5px solid #909090;

  ${ props => props.disabled && css`
    pointer-events: none;
    opacity: 0.4;
  ` }
`;


const NameSelect = ({ view, visibility, popups, handleChange }) => {

  const saved = view.saved;
  const selected = view.popup.name;

  const ids = Object.keys( popups );
  const options = ids.map( id => {
    let optionId = Number(id) + 1;

    return (
      <option
        key={ optionId }
        thiskey={ optionId }
        value={ popups[id].name }
      >
        { popups[id].name }
      </option>
    );
  } );

  const disabled = visibility.NameSelect === 'FADE';
  const faded = disabled ? "faded" : "";

  // <option value="empty">-------------</option>
  // disabled={ !!options } hidden={ !!options }

  return (
    <div style={ wrapperStyle }>
      <label htmlFor="NameSelect">Select a popup:</label>
      <StyledNameSelect
        id="NameSelect"
        disabled={ disabled }
        value={ view.id === null ? "0" : selected }
        onChange={ (e) => handleChange( e, saved, visibility, popups ) }
      >
        <option key="0" thiskey="0" value="0"  hidden={ !!options } >---------</option>
        {options}
      </StyledNameSelect>
    </div>
  );

};

//////////////////////////////////////////
NameSelect.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.object.isRequired,
  popups: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  view: state.view,
  visibility: state.visibility,
  popups: state.popups
});


//  Dispatch helpers  //
// const getIndexFromTarget = ( target ) => {
//   return target.options.selectedIndex;
// };

const getIdByIndex = ( target, selectedIndex ) => {
  const index = target.options.selectedIndex;
  console.log("index is ", index );

  const strId = target.options[index].getAttribute( 'thiskey' );
  console.log("strId is ", strId );

  const popupId = strId === "0" ? null : Number( strId ) - 1;
  console.log("getIdByIndex returned a popupid of ", popupId); // Now returns null for initial "-------------" option, too!
  return popupId;
};


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, saved, visibility, popups ) => {
    e.target.blur();

    // const selectedIndex = getIndexFromTarget( e.target );
    const id = getIdByIndex( e.target );

    if ( saved || window.confirm( "Popup is not saved.  Load selected popup anyway?" ) ) {
      dispatch( getSelectedPopup( id, visibility, popups ) );
    }
  }
});

export default connect( mapState, mapDispatch )( NameSelect );
