import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import { updateField } from 'store/actions';

import Toggle from './drafttoggle/Toggle'

const StyledPublishedToggle = styled.div`
  display: inline-block;

  label {
    margin-right: 13px;
    font-size: 13px;
    font-weight: 600;
  }

  select {
    text-align: center;
  }
`;

const StyledNotice = styled.span`
  color: ${ props => props.published ? 'green' : '#666' }
  font-size: 13px;
  font-weight: 600;
`



const PublishedToggle = ({ view, handleChange, handleClick }) => {

  const value = view.popup.published
  const notice = value ? `Popup is live!` : `Just a draft.`

  return (

    <StyledPublishedToggle>
      <label>Published?</label>
      <Toggle label="published" value={value} handleChange={handleChange}/>
      <StyledNotice published={ value }>{notice}</StyledNotice>
    </StyledPublishedToggle>
  );
};


//////////////////////////////////////////
PublishedToggle.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  view: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
}
//////////////////////////////////////////


const mapState = ( state, ownProps ) => ({
  label: ownProps.label,
  id: ownProps.id,
  options: ownProps.options,
  view: state.view
});


const mapDispatch = (dispatch) => ({
  handleChange: ( value, label ) => {
    dispatch( updateField( value, label ) );
  }
});

export default connect( mapState, mapDispatch )( PublishedToggle );
