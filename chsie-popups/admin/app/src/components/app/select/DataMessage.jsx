import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'

import Spinner from './DataMessage/Spinner'
import SuccessSvg from './DataMessage/SuccessSvg'
import FailureSvg from './DataMessage/FailureSvg'
import InnerMessage from './DataMessage/InnerMessage'


const StyledWrapper = styled.div`
  display: inline-block;
  // margin-left: 20px;
  vertical-align: middle;
  font-size: 13px;
`

const StyledSpinnerWrapper = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  vertical-align: middle;
`

const DataMessage = ({ vis, isSaved, isDeleted }) => {
  const showSave = (vis === 'SAVE')
  const showDelete = (vis === 'DELETE')

  const showSuccess = ( showSave && isSaved ) || ( showDelete && isDeleted )
  const showFailure = ( showSave && !isSaved ) || ( showDelete && !isDeleted )



  return (
    <StyledWrapper>
      <StyledSpinnerWrapper>
        <Spinner />
      </StyledSpinnerWrapper>

      <SuccessSvg show={showSuccess} />
      <FailureSvg show={showFailure} />
      <InnerMessage isSaved={isSaved} isDeleted={isDeleted} showSave={showSave} showDelete={showDelete} />
    </StyledWrapper>
  )
}


//////////////////////////////////
DataMessage.proptypes = {
  vis: PropTypes.string.isRequired,
  saved: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
}
//////////////////////////////////

const mapState = ( state ) => ({
  vis: state.visibility.DataMessage,
  isSaved: state.data.isSaved,
  isDeleted: state.data.isDeleted,
})


export default connect( mapState, null )( DataMessage )
