import React, {useEffect} from 'react';
import styled from 'styled-components';

import store from 'store'

import { fetchPopups } from 'store/actions'

import Row from '../shared/Row';
import Column from '../shared/Column';

import PreviewModal from './app/PreviewModal'
import DataMessage from './app/select/DataMessage';
import SelectSection from './app/SelectSection';
import TextSection from './app/TextSection';
import StylingSection from './app/StylingSection';
import RulesSection from './app/RulesSection';

import StoreLogger from './StoreLogger';
import TestFetcher from './TestFetcher';

const StyledApp = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h2 {
    margin-top: 0;
  }

  * {
    box-sizing: border-box;
  }

`

const StyledIntro = styled.span`
  margin-right: 20px;
  padding: 6px 0;
`


export const App = () => {

  useEffect( () => {
    // console.log( "App rendered." )
    store.dispatch( fetchPopups() )
  })

  return (
    <>
      <PreviewModal />
      <StyledApp>

        <Row>
          <StyledIntro>This application allows you to turn a Formidable form into a custom popup.</StyledIntro>
            <DataMessage />
        </Row>

        <Row>
          <SelectSection />
        </Row>

        <Row>
          <Column side="left">
            <TextSection />
            <StylingSection />
          </Column>

          <Column side="right">
            <RulesSection />
          </Column>
        </Row>

        <Row zIndex="-1">
          <TestFetcher />
          <StoreLogger />
        </Row>

      </StyledApp>
    </>
  )
};
