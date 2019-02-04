import React from 'react';
// import {connect} from 'react-redux';

import './_css/SectionRow.css';


export const SectionRow = ({ heading = "", children }) => {

    const h5 = heading.length ? (
      <div className="row-label">
        <h5>{ heading }</h5>
      </div>
      )
      :  "";

    return (
      <div className="row">
          { h5 }
          { children }
      </div>
    );
};
