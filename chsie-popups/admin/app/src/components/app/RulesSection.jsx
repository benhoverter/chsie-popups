import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

// import Section from 'shared/Section';
import {SectionRow} from 'shared/SectionRow';
import FormPicker from './rules/FormPicker'
import SaveToUsermeta from './rules/SaveToUsermeta';
import Logic from './rules/Logic';

import TransitionSection from 'transitions/TransitionSection';

const RulesSection = ({ visibility }) => {
  const visible =  (visibility.RulesSection === 'OPENING') || (visibility.RulesSection === 'OPEN')

  return (
    <TransitionSection
      visible={visible}
      sectionName="RulesSection"
    >
      <h2>Rules</h2>

      <SectionRow>
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

    </TransitionSection>
  );
};

//////////////////////////////////////////
RulesSection.propTypes = {
  visibility: PropTypes.object.isRequired,
}
//////////////////////////////////////////

const mapState = ( state ) => ({
  visibility: state.visibility
});

export default connect( mapState, null )( RulesSection );
