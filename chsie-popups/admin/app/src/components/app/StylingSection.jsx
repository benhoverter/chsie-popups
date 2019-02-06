import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {SectionRow} from 'shared/SectionRow';
import ColorPicker from './styling/ColorPicker';
import OptionPicker from './styling/OptionPicker';
import PositionPicker from './styling/PositionPicker';

import TransitionSection from 'transitions/TransitionSection';


const StylingSection = ({ visibility }) => {

  const visible =  (visibility.StylingSection === 'OPENING') || (visibility.StylingSection === 'OPEN');

  return (
    <TransitionSection
      visible={visible}
      sectionName="StylingSection"
    >

      <h2>Styling</h2>

      <SectionRow heading="Background">
        <ColorPicker
          title="Color"
          label="backgroundColor"
          id="background-color"
          />
      </SectionRow>

      <SectionRow heading="Text Color">
        <ColorPicker
          title="Title"
          label="titleColor"
          id="title-color"
          />

        <ColorPicker
          title="Description"
          label="descriptionColor"
          id="description-color"
          />

        <ColorPicker
          title="Body"
          label="bodyColor"
          id="body-color"
          />
      </SectionRow>

      <SectionRow heading="Border" >
        <OptionPicker
          title="Width"
          label="borderWidth"
          id="border-width"
          options={[
            "0.5px",
            "1px",
            "2px",
            "3px",
            "4px"
          ]}
          />

        <OptionPicker
          title="Style"
          label="borderStyle"
          id="border-style`"
          options={[
            "none",
            "solid",
            "double",
            "dashed",
            "dotted",
            "groove",
            "ridge",
            "inset",
            "outset"
          ]}
          />

        <ColorPicker
          title="Color"
          label="borderColor"
          id="border-color"
          />
      </SectionRow>

      <SectionRow heading="Position" >
        <PositionPicker
          label="position"
          id="position"
          options={[
            "top",
            "bottom",
            "left",
            "right",
            "center"
          ]}
          />
      </SectionRow>

    </TransitionSection>
  );

};

//////////////////////////////////////////
StylingSection.propTypes = {
  visibility: PropTypes.object.isRequired,
}
//////////////////////////////////////////


const mapState = ( state ) => ({
  visibility: state.visibility
});

export default connect( mapState, null )( StylingSection );
