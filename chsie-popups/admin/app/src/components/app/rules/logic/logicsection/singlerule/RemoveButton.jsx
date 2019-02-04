import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { removeRule } from 'store/actions';

import './_css/RemoveButton.css';

export const RemoveButton = ({ label, index, handleClick }) => {
  return (
    <div className="RemoveButton">
      <button
        onClick={ () => handleClick( label, index ) }
      >
        X
      </button>
    </div>
  );
};

//////////////////////////////////////////
RemoveButton.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};
//////////////////////////////////////////



const mapDispatch = (dispatch) => ({
  handleClick: ( label, index ) => {
      if ( window.confirm( "Are you sure you want to remove this rule?" ) ) {
        dispatch( removeRule( label, index ) );
      }
  }
});

export default connect( null, mapDispatch )( RemoveButton );
