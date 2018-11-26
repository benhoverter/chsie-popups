import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import { updateRule } from 'store/actions';

import './_css/TargetSelector.css';

const TargetSelector = ({ label, value = "", index, options, handleChange }) => {

    const optionList = options.map( ( option, i ) => (
        <option key={ i } value={ option } >
            {option}
        </option>
    ) );

    return (

        <div className="TargetSelector">
            <select
                value={ value }
                onChange={ (e) => handleChange( e, label, index ) }
            >
                <option value="***" >---------</option>
                {optionList}
            </select>
        </div>
    );

};

//////////////////////////////////////////
TargetSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapDispatch = ( dispatch ) => ({
  handleChange: ( e, label, index ) => {
    dispatch( updateRule( e.target.value, label, index ) )
  }
});

export default connect( null, mapDispatch )( TargetSelector );
