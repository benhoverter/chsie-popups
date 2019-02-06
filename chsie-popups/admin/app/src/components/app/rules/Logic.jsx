import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import './_css/Logic.css';

import {LogicSection} from './logic/LogicSection';


const Logic = ({ popup }) => {

  const allRules = popup.rules ?
    popup.rules :
    { category:[], tags:[], postTypes:[] };


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
  view: PropTypes.object.isRequired,
}
//////////////////////////////////////////



const mapState = ( state ) => ({
  popup: state.view.popup
});

export default connect( mapState, null )( Logic );
