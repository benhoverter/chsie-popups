import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Column from 'shared/Column';

import NameSelect from './select/NameSelect';
import SaveButton from './select/SaveButton';
import NewButton from './select/NewButton';
import DelButton from './select/DelButton';


const StyledWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  float: right;

  @media screen and ( max-width: 1060px ) {
    float: none;
    margin: 15px 0 0 100px;
  }
`

const SelectSection = ({ view, popups }) => (
  <React.Fragment>
    <Column side="left" select="true">
      <NameSelect />

      <StyledWrapper>
        <NewButton />
      </StyledWrapper>
    </Column>

    <Column side="right"  select="true">
      <SaveButton />
      <DelButton />
    </Column>
  </React.Fragment>
)



const mapState = ( state, ownProps ) => ({
  view: state.view,
  popups: state.popups,
});


export default connect( mapState, null )( SelectSection );
