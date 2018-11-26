import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { updateRule } from 'store/actions';

import './_css/AndOrRadios.css';

const AndOrRadios = ({ label, value = "|", index, handleChange }) => {


  return (
    <div className="AndOrRadios">
      <label className={ value === "|" ? "checked" : "" } >
        <input
          type="radio"
          value="|"
          name={ "and-or-" + index }
          checked={ value === "|" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        OR
      </label>
      <label className={ value === "&" ? "checked" : "" }>
        <input
          type="radio"
          value="&"
          name={ "and-or-" + index }
          checked={ value === "&" }
          onChange={ (e) => handleChange( e, label, index ) }
          />
        AND
      </label>
    </div>
  );
};

//////////////////////////////////////////
AndOrRadios.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, label, index ) => {
    dispatch( updateRule( e.target.value, label, index ) )
  }
});

export default connect( null, mapDispatch )( AndOrRadios );
