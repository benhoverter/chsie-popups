import React from 'react'
import styled from 'styled-components'


const StyledP = styled.p`
  color: ${props => props.color}
`

const DummyForm = ({ color }) => (
  <StyledP color={color}>The form!</StyledP>
)


export default DummyForm
