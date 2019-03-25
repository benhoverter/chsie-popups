import React from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import styled, {css} from 'styled-components'

// import {animated, useTransition} from 'react-spring'

import DummyForm from './DummyForm'


const getPositionCSS = position => {
  switch ( position ) {
    case 'top':
      return css`
        top: 0;
        width: 100%;
      `

    case 'bottom':
      return css`
        bottom: 0;
        width: 100%;
      `

    case 'left':
      return css`
        left: 0;
        top: 50%;
        transform: translateY( -50% );
        width: 50%;
      `

    case 'right':
      return css`
        right: 0;
        top: 50%;
        transform: translateY( -50% );
        width: 50%;
      `

    case 'center':
      return css`
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% );
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
  background-color: ${ props => props.backgroundColor };
  border: ${props => props.border};
  ${ props => getPositionCSS( props.position) }
`

const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color || 'black'}

`

const StyledDescription = styled.p`
  color: ${props => props.color || 'black'}

`


const ModalBox = ({ show, popup }) => {

  const border = `${popup.borderWidth} ${popup.borderStyle} ${popup.borderColor} `



  return(
    <StyledModal border={ border } backgroundColor={popup.backgroundColor} position={popup.position} >
      <StyledTitle color={popup.titleColor}>{popup.title}</StyledTitle>
      <StyledDescription color={popup.descriptionColor}>{popup.description}</StyledDescription>
      <DummyForm color={popup.bodyColor}/>
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



export default connect( mapState, null )( ModalBox )
