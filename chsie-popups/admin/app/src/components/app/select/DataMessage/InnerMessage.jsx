import React from 'react'
// import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import styled, {css} from 'styled-components'
import { useTransition, animated } from 'react-spring'

import store from 'store'
import {setVisibility} from 'store/actions'


const StyledSpan = styled.span`
  font-weight: 600;
  vertical-align: middle;

  ${props => props.success && css`
    color: black;
  `}

  ${props => !props.success && css`
    color: crimson;
  `}
`
const AnimatedSpan = animated( StyledSpan )

const InnerMessage = ({ isSaved, isDeleted, showSave, showDelete }) => {

  const success = ( ( showSave && isSaved ) || ( showDelete && isDeleted ) )
  let text = ""


  // showSave = true // TESTING


  if ( showSave ) {
    text = isSaved ? "Popup saved." : "Failed to save!"
  } else if ( showDelete ) {
    text = isDeleted ? "Popup deleted." : "Failed to delete!"
  }

  const transition = useTransition( (showSave || showDelete), null, {
    from:  { opacity: 0, width: `0%` },
    enter: { opacity: 1, width: `100%` },
    leave: { opacity: 0, width: `0%` },

    config: { mass: 1, tension: 300, friction: 20 },

    onDestroyed: () => {
      setTimeout( () => {
        store.dispatch( setVisibility({
          DataMessage: 'CLOSED',
        }) )
      }, 1000 )
    },


  } )

  return transition.map( ({ item, props, key }) =>
    item &&
      <AnimatedSpan style={props} success={success} >{ text }</AnimatedSpan>
  )

}


//////////////////////////////////
InnerMessage.proptypes = {
  vis: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
//////////////////////////////////


export default InnerMessage
