import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import styled, { css } from 'styled-components';

import { getSelectedPopup } from 'store/actions';

const StyledWrapper = styled.div`
  display: inline-block;

  label {
    font-size: 13px;
    font-weight: 600;
  }
`;

const StyledNameSelect = styled.select`
  vertical-align: top;
  margin-left: 10px;
  margin-right: 20px;
  min-width: 200px;
  height: 28px;
  border: 1.5px solid #909090;

  ${ props => props.disabled && css`
    pointer-events: none;
    opacity: 0.4;
  ` }
`;


const NameSelect = ({ view, visibility, popups, saved, handleChange }) => {

  const ids = Object.keys( popups );
  const options = ids.map( id => {

    return (
      <option
        key={ id }
        thiskey={ id }
        value={ id }
      >
        { popups[id].name }
      </option>
    );
  } );

  const disabled = visibility.NameSelect === 'FADE';

  return (
    <StyledWrapper>
      <label htmlFor="NameSelect">Select a popup:</label>
      <StyledNameSelect
        id="NameSelect"
        disabled={ disabled }
        value={ view.id === null ? "0" : view.id }
        onChange={ (e) => handleChange( e, visibility, popups, saved ) }
      >
        <option key="0" thiskey="0" value="0"  hidden={ !!options } >---------</option>
        {options}
      </StyledNameSelect>
    </StyledWrapper>
  );

};

//////////////////////////////////////////
NameSelect.propTypes = {
  view: PropTypes.object.isRequired,
  visibility: PropTypes.object.isRequired,
  popups: PropTypes.object.isRequired,
  saved: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  view: state.view,
  visibility: state.visibility,
  popups: state.popups,
  saved: state.data.isSaved,
});


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, visibility, popups, saved ) => {
    e.target.blur();

    if ( saved || window.confirm( "Popup is not saved.  Load selected popup anyway?" ) ) {
      dispatch( getSelectedPopup( e.target.value, visibility, popups ) );
    }
  }
});

export default connect( mapState, mapDispatch )( NameSelect );
