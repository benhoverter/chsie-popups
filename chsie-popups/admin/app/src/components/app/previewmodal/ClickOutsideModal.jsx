import {Component} from 'react';
import {PropTypes} from 'prop-types';

import onClickOutside from 'react-onclickoutside';


class ClickOutsideModal extends Component {
  // props = {  children, onClickOff() }
  constructor( props ) {
    super( props );

    this.handleClickOutside = this.handleClickOutside.bind( this );
  }

  handleClickOutside = () => {
    console.log('handleClickOutside method called.' )
    this.props.onClickOff()
  }

  render() {
    return( this.props.children );
  }

}

//////////////////////////////////////////
ClickOutsideModal.propTypes = {
  onClickOff: PropTypes.func.isRequired,
}
//////////////////////////////////////////

export default onClickOutside( ClickOutsideModal );
