import React from 'react'
import {Transition} from 'react-spring'


const zIndex = {zIndex: "99999"}

const TransitionModal = ({ visible, onDestroyed, ...props }) => (

  <Transition
    config={{ mass: 1, tension: 300, friction: 24 }}
    items={visible}
    from={{ opacity: 0, transform: `scale( 0 )` }}
    enter={{ opacity: 1, transform: `scale( 1 )` }}
    leave={{ opacity: 0, transform: `scale( 0 )` }}
    onDestroyed={ onDestroyed }
  >

    { visible => visible && (transitionProps =>
      <div style={{  ...zIndex, ...transitionProps }}>
        {props.children}
      </div>
    )}

  </Transition>

)

export default TransitionModal
