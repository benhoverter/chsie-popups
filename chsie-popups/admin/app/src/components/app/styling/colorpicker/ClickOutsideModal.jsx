import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import onClickOutside from 'react-onclickoutside';
import {ChromePicker} from 'react-color';

import styled from 'styled-components';

import './_css/ClickOutsideModal.css';

const StyledChromePicker = styled.div`
  position: absolute;
  z-index: 99999;
`;

class ClickOutsideModal extends Component {
  // props = { color, onChangeComplete(), onClickOff() }
  constructor( props ) {
    super( props );

    this.state = { showModal: false };

    this.handleClickOutside = this.handleClickOutside.bind( this );
  }

  handleClickOutside = e => {
    console.log('onClickOutside() method called on ', e );
    this.props.onClickOff(e);
  }

  render() {
    const { color, onChangeComplete } = this.props;

    // return(
    //   <ChromePicker
    //     disableAlpha={true}
    //     color={ color }
    //     onChangeComplete={ e => onChangeComplete(e) }
    //   />
    // );

    return(
      <StyledChromePicker>
        <ChromePicker
          disableAlpha={true}
          color={ color }
          onChangeComplete={ e => onChangeComplete(e) }
        />
      </StyledChromePicker>
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
