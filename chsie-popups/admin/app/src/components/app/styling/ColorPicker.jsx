import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import ClickOutsideModal from './colorpicker/ClickOutsideModal';

import FieldContainer from 'shared/FieldContainer';

import './_css/ColorPicker.css';

import {updateField} from 'store/actions';


class ColorPicker extends React.Component  {
  constructor( props ) {
    super( props );
    // ({ title, label, id, view, handleChangeComplete })

    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind( this );
    this.handleClick = this.handleClick.bind( this );
  }

  timerMethod = () => {
    let timer = undefined;

    return ( callback, ms ) => {
      if (timer === undefined) {
        timer = setTimeout( callback, ms );
      } else {
        timer.clearTimeout();
      }
    }
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal });
  }

  handleClick (e) {
    console.log( "handleClick's event  was " , e );
    this.timerMethod()( this.toggleModal, 100 ); // Curried fn for closure on timer.

  }


  render() {
    // console.log( this.props.label + " has " , this.state );
    const { view, label, title, handleChangeComplete } = this.props;

    const hexColor = view.popup[label];

    const pickerBorder = {
      border: "4px solid " + hexColor,
    }


    const modal = (
      <ClickOutsideModal
        color={hexColor}
        onChangeComplete={ ( e ) => handleChangeComplete( e, label ) }
        onClickOff = { (e) => this.handleClick(e) }
      />
    );

    return (
      <FieldContainer title={ title }>

        <div className="ColorPicker" >
          <div
            style={ pickerBorder }
            onClick={ (e) =>  {
              if ( this.state.showModal === false ) {
                this.handleClick(e);
              } else { return false; }
            }}
          >

            <span>{ hexColor }</span>
          </div>

          { this.state.showModal && modal }

        </div>
      </FieldContainer>

    );
  }
};


//////////////////////////////////////////
ColorPicker.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  view: PropTypes.object.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  title: ownProps.title,
  label: ownProps.label,
  id: ownProps.id,
  view: state.view
});

const mapDispatch = (dispatch) => ({
  handleChangeComplete: ( color, label ) => {
    dispatch( updateField( color.hex, label ) );
  }
});

export default connect( mapState, mapDispatch )( ColorPicker );
