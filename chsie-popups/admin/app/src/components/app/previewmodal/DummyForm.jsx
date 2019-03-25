import React from 'react'
import styled from 'styled-components'


const StyledWrapper = styled.div`

  p {
    color: ${props => props.color}
  }

  label {
    display: block;
    color: ${props => props.color}
  }
`

const DummyForm = ({ color }) => (

  <StyledWrapper color={ color }>

    <p>How useful was this module?</p>

    <label htmlFor="very-useful"><input id="very-useful"  value="very-useful" type="radio" name="radios" />Very useful</label>
    <label htmlFor="somewhat-useful"><input id="somewhat-useful" value="somewhat-useful" type="radio" name="radios"/>Somewhat useful</label>
    <label htmlFor="not-useful"><input id="not-useful" value="not-useful" type="radio" name="radios"/>Not useful</label>

    <p>Please leave a comment:</p>
    <label htmlFor="comment"><textarea /></label>

  </StyledWrapper>
)


export default DummyForm
