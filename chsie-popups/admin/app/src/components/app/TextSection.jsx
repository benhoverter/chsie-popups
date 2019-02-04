import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import TextField from './text/TextField';
import TextareaField from './text/TextareaField';

import TransitionSection from '../../transitions/TransitionSection';

import './_css/Text.css';


const TextSection = ({ visible }) => (
  <TransitionSection
    visible={visible}
    sectionName="TextSection"
  >
    <div className="TextSection section back-ltgray">
      <h2>Text</h2>

      <TextField
        label="name"
        text="Popup Name"
        placeholder="unnamed"
        autoFocus={ true }
        fieldInfo="This name will only serve as an identifier in the dropdown menu."
        />

      <TextField
        label="title"
        text="Display Title"
        placeholder="please choose a title"
        fieldInfo="This title will show at the top of the popup."
        />

      <TextareaField
        label="description"
        text="Description"
        placeholder="all about the popup"
        fieldInfo="This will show beneath the heading, but before the form itself."
        />

    </div>
  </TransitionSection>
);


//////////////////////////////////////////
TextSection.propTypes = {
  visible: PropTypes.bool.isRequired,
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  visible:  (state.visibility.TextSection === 'OPENING') || (state.visibility.TextSection === 'OPEN')
});

export default connect( mapState, null )( TextSection );
