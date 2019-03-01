import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import Button from 'shared/Button';

import { savePopup } from 'store/actions';


const SaveButton = ({ view, saved = false, popups, handleClick }) => (

  <Button
    width="56px"
    disabled={ saved === true  }
    onClick={ (e) => handleClick( e, view, popups ) }
  >
    { ( saved === true ) ? "Saved" : "Save"  }
  </Button>

);


//////////////////////////////////////////
SaveButton.propTypes = {
  view: PropTypes.object.isRequired,
  popups: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  view: state.view,
  saved: state.data.isSaved,
  popups: state.popups,
});


const mapDispatch = ( dispatch ) => ({
  handleClick: ( e, view, popups ) => {

    e.target.blur();

    if ( view.popup.name === "" ) {
      alert( "Please give this popup a name before saving it." );
      document.getElementById( 'popup-name').focus();
    } else {
      dispatch( savePopup( view, popups ) ); // Complex thunk.
    }
  }
});

export default connect( mapState, mapDispatch )( SaveButton );
