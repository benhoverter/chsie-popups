import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {SectionRow} from '../../shared/SectionRow';
import FormPicker from './rules/FormPicker'
import SaveToUsermeta from './rules/SaveToUsermeta';
import Logic from './rules/Logic';

import TransitionSection from '../../transitions/TransitionSection';

const RulesSection = ({ visible }) => (
  <TransitionSection
    visible={visible}
    sectionName="RulesSection"
  >
    <div className="RulesSection section back-ltgray" >
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
  </TransitionSection>

);

//////////////////////////////////////////
RulesSection.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
}
//////////////////////////////////////////

const mapState = ( state ) => ({
  visible:  (state.visibility.RulesSection === 'OPENING') || (state.visibility.RulesSection === 'OPEN')
});

export default connect( mapState, null )( RulesSection );
