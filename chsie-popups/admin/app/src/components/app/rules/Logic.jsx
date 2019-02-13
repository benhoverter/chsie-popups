import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';

import {LogicSection} from './logic/LogicSection';

const StyledWrapper = styled.div`
  h3 {
    margin-top: 0;
  }
`;

const Logic = ({ popup }) => {

  const allRules = popup.rules ?
    popup.rules :
    { categories:[], tags:[], postTypes:[] };


  return (
    <StyledWrapper>
      <h3>Display this popup when...</h3>

      <LogicSection heading="Category" label="categories" rules={ allRules.categories } allRules={ allRules } />
      <LogicSection heading="Tag" label="tags" rules={ allRules.tags } allRules={ allRules } />
      <LogicSection heading="Post Type" label="postTypes" rules={ allRules.postTypes } allRules={ allRules } />

    </StyledWrapper>
  );

};

//////////////////////////////////////////
Logic.propTypes = {
  popup: PropTypes.object.isRequired,
}
//////////////////////////////////////////



const mapState = ( state ) => ({
  popup: state.view.popup
});

export default connect( mapState, null )( Logic );
