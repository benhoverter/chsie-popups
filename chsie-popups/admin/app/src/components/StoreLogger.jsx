import React from 'react';
import { connect } from 'react-redux';

const loggerStyles = {
  // zIndex: "-1",
}

const StoreLogger = ({ storeState }) => (
  <div className="store-log" style={ loggerStyles }>
    <pre id="store-log">
      { storeState }
    </pre>
  </div>
);


const mapState = ( state ) => ({
  storeState: JSON.stringify( state, null, 4 )
});

export default connect( mapState, null )(StoreLogger);
