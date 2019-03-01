import React from 'react'
import {PropTypes} from 'prop-types'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'

const StyledFailureIcon = styled.div`
  display: inline-block;
  height: auto;
  width: 23px;
  vertical-align: top;
  margin-right: 8px;

  svg {
    enable-background: new 0 0 119.8 119.8;;
  }

  .st0 {
    fill:#D70000;
  }

  .st1 {
    fill:none;
    stroke:#000000;
    stroke-width:10;
    stroke-miterlimit:10;
  }
`


const AnimatedFailureIcon = animated( StyledFailureIcon )

const FailureSvg = ({ show }) => {

  const transition = useTransition( show, null, {
    from:  { opacity: 0, transform: `scale( 0 )` },
    enter: { opacity: 1, transform: `scale( 1 )` },
    leave: { opacity: 0, transform: `scale( 0 )` },

    config: { mass: 1, tension: 300, friction: 20 }
  } )

  return transition.map( ({ item, props, key }) =>
    item &&
    <AnimatedFailureIcon style={props} >
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 119.8 119.8" >
        <g>
          <circle className="st0" cx="59.9" cy="59.9" r="59.9"/>
          <g>
            <line className="st1" x1="29.7" y1="29.7" x2="90.1" y2="90.1"/>
        		<line className="st1" x1="90.1" y1="29.7" x2="29.7" y2="90.1"/>
        	</g>
        </g>
      </svg>
    </AnimatedFailureIcon>
  )
}


//////////////////////////////////
FailureSvg.proptypes = {
  show: PropTypes.bool.isRequired,
  // success: PropTypes.bool.isRequired,
}
//////////////////////////////////


export default FailureSvg
