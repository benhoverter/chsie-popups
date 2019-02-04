import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { updateRule } from 'store/actions';

import './_css/IsIsntRadios.css';

export const IsIsntRadios = ({ label, value = "$", index, handleChange }) => {

  return (
    <div className="IsIsntRadios">

      <label className={ value === "$" ? "checked" : "" }>
        <input
          type="radio"
          value="$"
          name={ label + "-is-isnt-" + index }
          checked={ value === "$" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        is...
      </label>

      <label className={ value === "!" ? "checked" : "" }>
        <input
          type="radio"
          value="!"
          name={ label + "-is-isnt-" + index }
          checked={ value === "!" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        isn't...
      </label>

    </div>
  );
};

//////////////////////////////////////////
IsIsntRadios.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};
//////////////////////////////////////////



const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, label, index ) => {
    dispatch( updateRule( e.target.value, label, index ) );
  }
});

export default connect( null, mapDispatch )( IsIsntRadios );
