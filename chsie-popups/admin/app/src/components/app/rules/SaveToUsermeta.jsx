import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {updateField, setVisibility} from 'store/actions';

const StyledWrapper = styled.div`
  position: relative;
  padding-left: 31px;

  input {
    position: absolute;
    top: 3px;
    left: 0;
  }

  label {
    font-size: 13px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    font-style: italic;
    margin: 0;
  }
`;

const StyledDescription = styled.div`
  display: inline-block;
`;


const SaveToUsermeta = ({ value = true, handleChange }) => (

  <StyledWrapper>
    <input
      type="checkbox"
      id="save-to-usermeta"
      name="save-to-usermeta"
      checked={ value }
      value={ value }
      onChange={ ( e ) => {
        handleChange( e )
      } }
      />

    <StyledDescription>
      <label htmlFor="save-to-usermeta">Save form responses in the 'wp_usermeta' table?</label>
      <p>
        Responses will be saved in each user's metadata.
      </p>
      <p>
        Enables easier access for third-party plugins.
      </p>
    </StyledDescription>
  </StyledWrapper>

);



//////////////////////////////////////////
SaveToUsermeta.propTypes = {
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  value: state.view.popup.saveToUsermeta,
});


const mapDispatch = (dispatch) => ({
  handleChange: ( e ) => {
    dispatch( updateField( e.target.checked, "saveToUsermeta" ) );
    dispatch( setVisibility({
      SaveButton: 'OPEN'
    }) );
  }
});

export default connect( mapState, mapDispatch )( SaveToUsermeta );
