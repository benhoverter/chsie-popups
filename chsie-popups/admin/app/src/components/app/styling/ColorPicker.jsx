import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import styled, {css} from 'styled-components';

import ClickOutsideModal from './colorpicker/ClickOutsideModal';
import FieldContainer from 'shared/FieldContainer';
// import resetTimer from 'shared/functions/resetTimer';

import {updateField} from 'store/actions';


const StyledColorPicker = styled.div`
  width: 76px;
  cursor: pointer;

  > div:first-child {
    text-align: center;

    ${props => props.hexColor && css `
      border: 4px solid ${props.hexColor};
    `}

    span {
      font-size: 13px;
    }
  }
`

class ColorPicker extends React.Component  {
  constructor( props ) {
    super( props );
    // props = ({ title, label, id, view, handleChangeComplete })

    this.state = {
      showModal: false,
      animating: false,
    };

  }

  // resetTimer = resetTimer();

  toggleModal() {
    // this.resetTimer( this.setState.bind( this ), 150, { showModal: !this.state.showModal } );
    if ( !this.state.animating ) {
      this.setState( {
        showModal: !this.state.showModal,
        animating: true,
      } )
    }
  }

  endTransition() {
    // if ( this.state.animating ) {
      this.setState({ animating: false }) // Problem: updating during state transition?
    // }
  }

  render() {
    // console.log( this.props.label + " has " , this.state );
    const { view, label, title, handleChangeComplete } = this.props;
    const hexColor = view.popup[label];

    return (
      <FieldContainer title={ title }>

        <StyledColorPicker hexColor={ hexColor } >
          <div
            onClick={ () =>  { !this.state.showModal && this.toggleModal() } }
          >
            <span>{ hexColor }</span>
          </div>

          { /* this.state.showModal && modal */ }
          <ClickOutsideModal
            visible={ this.state.showModal }
            color={hexColor}
            onChangeComplete={ ( e ) => handleChangeComplete( e, label ) }
            onClickOff={ () =>  { this.state.showModal && this.toggleModal() } }
            endTransition={ () => this.endTransition() }
          />
        </StyledColorPicker>

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
