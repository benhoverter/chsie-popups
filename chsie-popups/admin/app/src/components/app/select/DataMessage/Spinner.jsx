import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'
import SvgSpinner from 'react-svg-spinner'


const StyledSpinner = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const AnimatedSpinner = animated( StyledSpinner )


const Spinner = ({ show }) => {

  // show = true // TESTING

  const transition = useTransition( show, null, {
    from:  { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },

    config: { mass: 1, tension: 300, friction: 20 }
  } )

  return transition.map( ({ item, props, key }) =>
    item &&
    <AnimatedSpinner style={props} >
      <SvgSpinner size="23px" color="gray" thickness={4} gap={4}  />
    </AnimatedSpinner>
  )
}

//////////////////////////////////
Spinner.proptypes = {
  show: PropTypes.bool.isRequired,
}
//////////////////////////////////

const mapState = ( state ) => ({
  show: state.data.isFetching,
})

export default connect( mapState, null )( Spinner )
