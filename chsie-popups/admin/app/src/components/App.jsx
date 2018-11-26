import React from 'react';

import './_css/App.css';

import {SelectSection} from './app/Select';
import TextSection from './app/Text';
import StylingSection from './app/Styling';
import RulesSection from './app/Rules';

import StoreLogger from './StoreLogger';


export const App = () => (
  <div className="App">

    <div className="intro">
      <div className="row">
        <p>This application allows you to turn a Formidable form into a custom popup.</p>
      </div>
    </div>

      <div className="row">
        <SelectSection />

        <div className="col-1-of-2">
          <TextSection />
          <StylingSection />
        </div>

        <div className="col-1-of-2">
          <RulesSection />
        </div>
      </div>

    <div className="section">
      <div className="row">
        <StoreLogger />
      </div>
    </div>
  </div>
);
