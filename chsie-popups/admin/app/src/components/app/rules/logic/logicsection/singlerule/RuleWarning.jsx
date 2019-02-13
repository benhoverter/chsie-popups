import React from 'react'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'

// import './_css/RuleWarning.css'


const StyledSpan = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: crimson;
`

export const RuleWarning = ({ heading, error }) => {

  const errMsg = `Warning: you have selected the same ${heading} twice.  This will result in an error.`;

  if ( error ) {
    return (
      <StyledSpan>{ errMsg }</StyledSpan>
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
