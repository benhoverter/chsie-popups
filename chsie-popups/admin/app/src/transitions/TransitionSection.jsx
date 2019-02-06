import React from 'react'
import {Transition, config} from 'react-spring'

import store from 'store'
import {setVisibility} from 'store/actions'

import Section from '../shared/Section';


const TransitionSection = ({ visible, sectionName, ...props }) => (

  <Transition
    config={ config.fast }
    items={visible}
    from={{ opacity: 0, transform: `translateX( -800px )` }}
    enter={{ opacity: 1, transform: `translateX( 0 )` }}
    leave={{ opacity: 0, transform: `translateX( -800px )` }}
    onDestroyed={ () => {
      if ( visible ) {
        store.dispatch( setVisibility({ [sectionName]: "OPEN" }) )
      } else {
        store.dispatch( setVisibility({ [sectionName]: "CLOSED" }) )
      }
    }}
  >

    { visible => visible && (transitionProps =>
      <Section style={transitionProps}>
        {props.children}
      </Section>
    )}

  </Transition>

)

export default TransitionSection
