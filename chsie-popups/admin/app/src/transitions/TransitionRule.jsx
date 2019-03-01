import React from 'react'
import {Transition} from 'react-spring/renderprops'



const TransitionRule = ({ visible, onDestroyed, ...props }) => (

  <Transition
    config={{ mass: 1, tension: 300, friction: 24 }}
    items={visible}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >

    { visible => visible && (transitionProps =>
      <div style={{ transitionProps }}>
        {props.children}
      </div>
    )}

  </Transition>

)

export default TransitionRule
