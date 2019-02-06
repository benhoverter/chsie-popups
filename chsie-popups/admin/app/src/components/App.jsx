import React from 'react';

import './_css/App.css';

import Row from '../shared/Row';
import Column from '../shared/Column';

import {SelectSection} from './app/SelectSection';
import TextSection from './app/TextSection';
import StylingSection from './app/StylingSection';
import RulesSection from './app/RulesSection';

import StoreLogger from './StoreLogger';


export const App = () => {

  return (
    <div className="App">

      <Row>
        <p>This application allows you to turn a Formidable form into a custom popup.</p>
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

    </div>
  )
};
