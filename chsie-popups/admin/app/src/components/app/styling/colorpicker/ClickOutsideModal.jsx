import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import styled from 'styled-components';

import onClickOutside from 'react-onclickoutside';
import {ChromePicker} from 'react-color';

import TransitionModal from 'transitions/TransitionModal';


const StyledChromePicker = styled.div`
  position: absolute;
  z-index: 99999;
`;


// Needs to be a class component to use react-onclickoutside w/o hooks.
class ClickOutsideModal extends Component {
  // props = { visible, color, onChangeComplete(), onClickOff(), endTransition() }
  constructor( props ) {
    super( props );

    this.handleClickOutside = this.handleClickOutside.bind( this );
  }

  handleClickOutside = e => {
    // console.log('onClickOutside() method called on ', e );
    this.props.onClickOff(e);
  }

  render() {
    const { visible, color, onChangeComplete, endTransition } = this.props;

    return(
      <TransitionModal visible={ visible } onDestroyed={ () => endTransition() } >
        <StyledChromePicker>
          <ChromePicker
            disableAlpha={true}
            color={ color }
            onChangeComplete={ e => onChangeComplete(e) }
          />
        </StyledChromePicker>
      </TransitionModal>
    );

  }

}

export default onClickOutside( ClickOutsideModal );


//////////////////////////////////////////
ClickOutsideModal.propTypes = {
  color: PropTypes.string.isRequired,
  onChangeComplete: PropTypes.func.isRequired,
}
//////////////////////////////////////////
