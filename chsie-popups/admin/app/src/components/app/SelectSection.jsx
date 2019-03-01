import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Column from 'shared/Column';
// import Section from 'shared/Section';

import NameSelect from './select/NameSelect';
import SaveButton from './select/SaveButton';
import NewButton from './select/NewButton';
import DataMessage from './select/DataMessage';

import DelButton from './select/DelButton';

import {fetchPopups} from 'store/actions';

const StyledWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`

const SelectSection = ({ view, popups }) => {
  //////////////
  useEffect( () => {
    if ( JSON.stringify( popups ) === "{}" ) {
      fetchPopups()
    }
  } )
  //////////////

  return (
    <React.Fragment>
      <Column side="left">
        <NameSelect />

        <StyledWrapper>
          <SaveButton />
          <NewButton />
          <DataMessage />
        </StyledWrapper>
      </Column>

      <Column side="right">
          <DelButton />
      </Column>
    </React.Fragment>
  )
}



const mapState = ( state, ownProps ) => ({
  view: state.view,
  popups: state.popups,
});


export default connect( mapState, null )( SelectSection );
