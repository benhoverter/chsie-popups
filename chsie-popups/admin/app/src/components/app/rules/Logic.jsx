import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import './_css/Logic.css';

import {LogicSection} from './logic/LogicSection';


const Logic = ({ allRules }) => {

  return (

    <div className="Logic">
      <h3>Display this popup when...</h3>

      <LogicSection heading="Category" label="categories" rules={ allRules.categories } />
      <LogicSection heading="Tag" label="tags" rules={ allRules.tags } />
      <LogicSection heading="Post Type" label="postTypes" rules={ allRules.postTypes } />

    </div>

  );

};

//////////////////////////////////////////
Logic.propTypes = {
  allRules: PropTypes.object.isRequired,
}
//////////////////////////////////////////



const mapState = ( state ) => ({
  allRules: state.view.popup.rules
});

export default connect( mapState, null )( Logic );
