import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import TextField from './text/TextField';
import TextareaField from './text/TextareaField';

import TransitionSection from 'transitions/TransitionSection';


const TextSection = ({ visibility }) => {

  const visible =  (visibility.StylingSection === 'OPENING') || (visibility.StylingSection === 'OPEN');

  return (
    <TransitionSection
      visible={visible}
      sectionName="TextSection"
    >

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

    </TransitionSection>
  );
};


//////////////////////////////////////////
TextSection.propTypes = {
  visibility: PropTypes.object.isRequired,
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  visibility: state.visibility
});

export default connect( mapState, null )( TextSection );
