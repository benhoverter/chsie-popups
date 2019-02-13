import React from 'react';
import styled from 'styled-components';

// import './_css/App.css';

import Row from '../shared/Row';
import Column from '../shared/Column';

import {SelectSection} from './app/SelectSection';
import TextSection from './app/TextSection';
import StylingSection from './app/StylingSection';
import RulesSection from './app/RulesSection';

import StoreLogger from './StoreLogger';

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

`;


export const App = () => {

  return (
    <StyledApp>

      <Row>
        <span>This application allows you to turn a Formidable form into a custom popup.</span>
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
        <StoreLogger />
      </Row>

    </StyledApp>
  )
};
