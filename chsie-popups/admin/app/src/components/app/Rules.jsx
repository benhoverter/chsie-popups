import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {SectionRow} from '../../shared/SectionRow';
import FormPicker from './rules/FormPicker'
import SaveToUsermeta from './rules/SaveToUsermeta';
import Logic from './rules/Logic';


const RulesSection = ({ active }) => {
  if ( active ) {
    return (

      <div className="RulesSection section back-ltgray">
        <h2>Rules</h2>

        <SectionRow heading="Use Form ID...">
          <FormPicker
            label="formId"
            id="form-id"
            options={[
              1,2,3,4,5 // Will get these from WP.
            ]}
            />
        </SectionRow>

        <SectionRow>
          <SaveToUsermeta />
        </SectionRow>

        <SectionRow>
          <Logic />
        </SectionRow>

      </div>

    );
  } else {
    return null;
  }
};

//////////////////////////////////////////
RulesSection.propTypes = {
  active: PropTypes.bool.isRequired
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  active:  state.visibility.RulesSection === 'SHOW'
});


export default connect( mapState, null )( RulesSection );
