import React from 'react'

import {PropTypes} from 'prop-types'

import './_css/RuleWarning.css'

export const RuleWarning = ({ heading, error }) => {

  const errMsg = `Warning: you have selected the same ${heading} twice.  This will result in an error.`;

  if ( error ) {
    return (
      <div className="RuleWarning">
        <span>{ errMsg }</span>
      </div>
    )
  }

  return null;

}


//////////////////////////////////////////
RuleWarning.propTypes = {
  error: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
}
//////////////////////////////////////////
