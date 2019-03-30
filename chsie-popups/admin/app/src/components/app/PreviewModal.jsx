import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import {animated, useTransition} from 'react-spring'

import ClickOutsideModal from './previewmodal/ClickOutsideModal'
import ModalBox from './previewmodal/ModalBox'

import { setVisibility } from 'store/actions'


const StyledScreen = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);

  @media screen and ( max-width: 960px ) {
    padding-left: 34px;
  }
`

const PreviewModal = ({ show, handleClickOff }) => {

  if ( show ) {
    return (
      <StyledScreen>
        <ClickOutsideModal onClickOff={handleClickOff}>
          <ModalBox show={ show } />
        </ClickOutsideModal>
      </StyledScreen>
    )
  } else {
    return null
  }

}

const mapState = state => ({
  show: state.visibility.Preview === 'OPEN',
})
const mapDispatch = dispatch => ({
  handleClickOff: () => dispatch( setVisibility({
    Preview: 'CLOSED',
  }) )
})

export default connect( mapState, mapDispatch )( PreviewModal )
