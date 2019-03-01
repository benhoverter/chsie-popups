import React from 'react'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'

const StyledSuccessIcon = styled.div`
  display: inline-block;
  height: auto;
  width: 23px;
  vertical-align: top;
  margin-right: 8px;

  svg {
    enable-background: new 0 0 119.8 119.8;
  }

  .st0 {
    fill:#00A500;
  }

  .st1 {
    fill:none;
    stroke:#000000;
    stroke-width:10;
    stroke-miterlimit:10;
  }
`

const AnimatedSuccessIcon = animated( StyledSuccessIcon )

const SuccessSvg = ({ show }) => {

  // show = true //TESTING

  const transition = useTransition( show, null, {
    from:  { opacity: 0, transform: `scale( 0 )` },
    enter: { opacity: 1, transform: `scale( 1 )` },
    leave: { opacity: 0, transform: `scale( 0 )` },

    config: { mass: 1, tension: 300, friction: 20 }
  } )

  return transition.map( ({ item, props, key }) =>
    item &&
    <AnimatedSuccessIcon style={props} >
      <svg version="1.1" id="success-check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
       viewBox="0 0 119.8 119.8" >
         <g>
         	<circle className="st0" cx="59.9" cy="59.9" r="59.9"/>
         	<polyline className="st1" points="28.9,59.9 50.6,86.6 90.2,29.3 	"/>
         </g>
       </svg>
    </AnimatedSuccessIcon>
  )
}

//////////////////////////////////
SuccessSvg.proptypes = {
  show: PropTypes.bool.isRequired,
  // success: PropTypes.bool.isRequired,
}
//////////////////////////////////


export default SuccessSvg
