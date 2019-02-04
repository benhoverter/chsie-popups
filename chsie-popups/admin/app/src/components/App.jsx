import React from 'react';

import './_css/App.css';

import {SelectSection} from './app/SelectSection';
import TextSection from './app/TextSection';
import StylingSection from './app/StylingSection';
import RulesSection from './app/RulesSection';

import StoreLogger from './StoreLogger';


export const App = () => {

  return (
    <div className="App">

      <div className="intro">
        <div className="row">
          <p>This application allows you to turn a Formidable form into a custom popup.</p>
        </div>
      </div>

        <div className="row">
          <SelectSection />

          <div className="left-col">
            <TextSection />
            <StylingSection />
          </div>

          <div className="right-col">
            <RulesSection />
          </div>
        </div>

      <div className="section">
        <div className="row">
          <StoreLogger />
        </div>
      </div>
    </div>
  )
};
