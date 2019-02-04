import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import onClickOutside from 'react-onclickoutside';
import {ChromePicker} from 'react-color';

import './_css/ClickOutsideModal.css';

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

    return(
      <div className="ClickOutsideModal">
        <ChromePicker
          disableAlpha={true}
          color={ color }
          onChangeComplete={ e => onChangeComplete(e) }
        />
      </div>
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
