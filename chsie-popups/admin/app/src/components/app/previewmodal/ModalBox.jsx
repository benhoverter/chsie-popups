import React from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import styled, {css} from 'styled-components'

// import {animated, useTransition} from 'react-spring'

import DummyForm from './DummyForm'

import { setVisibility } from 'store/actions'


const getPositionCSS = position => {
  switch ( position ) {
    case 'top':
      return css`
        top: 52px;
        width: 50%;
        left: calc(50% + 80px);
        transform: translateX(-50%);
      `

    case 'bottom':
      return css`
        bottom: 0;
        width: 50%;
        left: calc(50% + 80px);
        transform: translateX(-50%);
      `

    case 'left':
      return css`
        left: 180px;
        top: calc(50% + 32px);
        transform: translateY( -50% );
        width: 50%;

        @media screen and ( max-width: 960px ) {
          left: 34px;
        }
      `

    case 'right':
      return css`
        right: 20px;
        top: calc(50% + 32px);
        transform: translateY( -50% );
        width: 50%;
      `

    case 'center':
      return css`
        top: calc(50% + 32px);
        left: calc(50% + 80px);
        transform: translate(-50%, -50%);
        width: 50%;
      `

    default: return undefined
  }
}

const StyledModal = styled.div`
  position: absolute;
  z-index: 999;
  padding: 28px 20px;
  text-align: left;
  border-radius: 3px;
  background-color: ${ props => props.backgroundColor };
  border: ${props => props.border};
  ${ props => getPositionCSS( props.position) }

`

const StyledCloser = styled.a`
  position: absolute;
  top: -12px;
  right: -12px;
  display: block;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: 0.1s all ease-in-out;

  &::before {
    position: absolute;
    top: -1px;
    left: -5px;
    font-family: ETModules;
    font-size: 32px;
    content: '\\e051';
    color: #85754d;
    border-radius: 50%;
    transition: 0.1s all ease-in-out;
  }

  &:hover, &:focus {
    background-color: #444444;

    &::before {
      color: #c7c7c7;
    }
  }
`

const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color || 'black'}

`

const StyledDescription = styled.p`
  color: ${props => props.color || 'black'}

`

const StyledNoShow = styled.div`
  position: relative;
  bottom: 0;
  background-color: #e7e7e7;
  color: black;
  text-align: center;
  padding: 5px;
  margin-top: 26px;
`
const StyledLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
`

const StyledCheckbox = styled.input`
  margin: 0px 0px 0 13px;
  vertical-align: middle;
`



const ModalBox = ({ show, popup, handleClick }) => {

  const border = `${popup.borderWidth} ${popup.borderStyle} ${popup.borderColor} `


  return(
    <StyledModal border={ border } backgroundColor={popup.backgroundColor} position={popup.position} >
      <StyledCloser href="#0" onClick={ handleClick }/>
      <StyledTitle color={popup.titleColor}>{popup.title}</StyledTitle>
      <StyledDescription color={popup.descriptionColor}>{popup.description}</StyledDescription>
      <DummyForm color={popup.bodyColor}/>
      <StyledNoShow>
        <StyledLabel>
          Don't show this again:
          <StyledCheckbox type="checkbox" />
        </StyledLabel>
      </StyledNoShow>
    </StyledModal>
  )
}

//////////////////////////////////////////
ModalBox.propTypes = {
  show: PropTypes.bool.isRequired,
  popup: PropTypes.object.isRequired,
}
//////////////////////////////////////////

const mapState = (state, ownProps) => ({
  show: ownProps.show,
  popup: state.view.popup,

})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch( setVisibility({
    'Preview': 'CLOSED',
  }) )
})



export default connect( mapState, mapDispatch )( ModalBox )
