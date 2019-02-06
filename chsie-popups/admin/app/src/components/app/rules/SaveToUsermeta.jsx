import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import './_css/SaveToUsermeta.css';

import {updateField, setVisibility} from 'store/actions';

const SaveToUsermeta = ({ value, handleChange }) => {

  return (

    <div className="SaveToUsermeta">
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

      <div className="description">
        <label htmlFor="save-to-usermeta">Save form responses in the 'wp_usermeta' table?</label>
        <p className="field-info">
          Responses will be saved in each user's metadata.
        </p>
        <p className="field-info">
          Enables easier access for third-party plugins.
        </p>
      </div>
    </div>

  );

};


//////////////////////////////////////////
SaveToUsermeta.propTypes = {
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  value: state.view.popup.saveToUsermeta
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
