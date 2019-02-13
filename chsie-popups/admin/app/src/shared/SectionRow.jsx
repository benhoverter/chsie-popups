import React from 'react';

import InnerRow from 'shared/InnerRow';
import RowHeading from 'shared/RowHeading';


export const SectionRow = ({ heading = "", children }) => {

    const rowHeading = heading.length ? (
        <RowHeading>{ heading }</RowHeading>
      )
      :  "";

    return (
      <InnerRow>
          { rowHeading }
          { children }
      </InnerRow>
    );
};
