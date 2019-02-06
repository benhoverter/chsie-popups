import React from 'react'
import styled from 'styled-components'

const StyledFieldContainer = styled.div`
  display: inline-block;
  width: 180px;
  vertical-align: middle;
  margin-top: 12px;
`

const StyledLabel = styled.div`
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 9px;
  font-size: 13px;
  font-weight: 400;
`


const FieldContainer = ({ title, children, htmlFor, key, ...props }) => {

  return (
    <StyledFieldContainer key={key}>

      <StyledLabel>
        <label htmlFor={htmlFor} >{ title }:</label>
      </StyledLabel>

      {children}

    </StyledFieldContainer>
  )
}

export default FieldContainer
