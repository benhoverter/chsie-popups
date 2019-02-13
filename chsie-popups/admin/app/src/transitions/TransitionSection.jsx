import React from 'react'
import {Transition, config} from 'react-spring'

import store from 'store'
import {setVisibility} from 'store/actions'

import Section from '../shared/Section'


const TransitionSection = ({ visible, sectionName, ...props }) => (

  <Transition
    config={{
      mass: 1,
      tension: 280,
      friction: 24,
    }}
    items={visible}
    from={{
      opacity: 0,
      transform: "scale( 0 ) translateY( 0px )",
    }}
    enter={{
      opacity: 1,
      transform: "scale( 1 ) translateY( 0px )",
    }}
    leave={{
      opacity: 0,
      transform: "scale( 1 ) translateY( 100px )",
    }}
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
