import React from 'react'
import styled, {css} from 'styled-components'

const StyledFieldContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  > div {
    display: inline-block;
  }

  select {
    width: 76px;
  }

  span {
    font-size: 13px;
  }

  ${props => props.type !== "position" && css`
    width: 200px;
    margin-top: 12px;
  `}

  ${props => props.type === "position" && css`
    width: auto;
    margin-top: 6px;
    margin-right: 42px;
  `}

`

const StyledLabel = styled.label`
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 9px;
  font-size: 13px;
  font-weight: 400;

  ${props => props.type !== "position" && css`
    text-align: right;
    width: 70px;
  `}

  ${props => props.type === "position" && css`
    text-align: left;
    width: auto;

    input {
      margin-right: 6px;
      bottom: -1px;
      position: relative;
    }
  `}
`

const FieldContainer = ({ thisKey, type, title, children, htmlFor, ...props }) => (

  <StyledFieldContainer key={thisKey} type={type} >

    <StyledLabel htmlFor={htmlFor} type={type} >

      { type !== "position" &&  title + ":" }

      { type === "position" && children }
      { type === "position" && title }

    </StyledLabel>

    { type !== "position" && children }

  </StyledFieldContainer>
)


export default FieldContainer
