import * as types from './types';

import store from '../store';


const setVisibility = ( targets ) => ({
  type: types.SET_VISIBILITY,
  targets           // An object of {targetComponent: "FADE | OPEN | OPENING | CLOSED | CLOSING"}
});

// Helper function for thunks that cycle visibility on OPEN/CLOSE animations.
const handleTransition = ( dispatch, doAction, visibility ) => {
  // console.log("handleTransition fired.");

  let initClosed =
    visibility.TextSection === "CLOSED"
    && visibility.StylingSection === "CLOSED"
    && visibility.RulesSection === "CLOSED";

  let initOpen =
    visibility.TextSection === "OPEN"
    && visibility.StylingSection === "OPEN"
    && visibility.RulesSection === "OPEN";

  if ( initClosed ) {
    // console.log("initClosed was true.");
    doAction();
  }

  if ( initOpen ) {
    // console.log("initOpen was true.");
    dispatch( setVisibility({
      TextSection: 'CLOSING',
      StylingSection: 'CLOSING',
      RulesSection: 'CLOSING',
    }) );

    const unsub = store.subscribe( () => {
      let vis = store.getState().visibility;
      let ready = vis.TextSection === "CLOSED" && vis.StylingSection === "CLOSED" && vis.RulesSection === "CLOSED";

      if ( ready ) {
        unsub(); // Must unsub before dispatch to prevent recursive loop on state change.
        doAction();
      }
    });
  }
};


const addPopup = ( nextId ) => ({ // Called in newPopup, not dispatched by component.
  type: types.ADD_POPUP,
  nextId
});

const newPopup = ( visibility, nextId  ) => { // Called by NewButton.  Main action.  Thunk.
  return ( dispatch ) => {

    const doNewPopup = () => {
      dispatch( addPopup( nextId ) );
      dispatch( setVisibility({ // Old sections are closed.  Open new sections.
        DataMessage: 'CLOSED',
        TextSection: 'OPENING',
        StylingSection: 'OPENING',
        RulesSection: 'OPENING',
      }) );
    }

    handleTransition( dispatch, doNewPopup, visibility );
  };
}


const selectPopup = ( id, popup ) => ({ // Called in getSelectedPopup, not dispatched by component.
  type: types.SELECT_POPUP,
  id,
  popup
});

const getSelectedPopup = ( id, visibility, popups ) => { // Called by NameSelect.  Main action.  Thunk.
  return ( dispatch ) => {

    const doSelection = () => {
      if ( id === null ) { // Catch in case default option is picked.
        // console.log("id was null.  Clearing view in ", store.getState().view );
        dispatch( clearView() );
      } else {
        // console.log(" id was", id );
        dispatch( selectPopup( id, popups[id] ) );
        dispatch( setVisibility({ // Old sections are closed.  Open new sections.
          DataMessage: 'CLOSED',
          TextSection: 'OPENING',
          StylingSection: 'OPENING',
          RulesSection: 'OPENING',
        }) );
      }
    }

    handleTransition( dispatch, doSelection, visibility );
  };
};


const updatePopups = ( json ) => ({
  type: types.UPDATE_POPUPS,
  popups: json
})

const postData = ( data, verify ) => { // Called in savePopup and deletePopup. Main fetch() thunk.
  return (dispatch) => {
    const url = 'http://localhost/dev/wp-json/chsie_popups/v1/popups'

    fetch( url, {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( json => {
      console.log("The fetch POST returned ", json )
      dispatch( verify( json ) )
    } )
  }
}


const clearView = () => ({
  type: types.CLEAR_VIEW
});


const verifySave = ( json ) => {  // Called within savePopup's postData().  Also a thunk.
  return ( dispatch ) => {

      if ( json === false ) {
        dispatch( setData({
          isFetching: false,
          isSaved: false,
        }) )

      } else {
        dispatch( updatePopups( json ) )

        dispatch( setData({
          isFetching: false,
          isSaved: true,
        }) )
      }

      dispatch( setVisibility({ DataMessage: 'SAVE' }) );
  }
}

const verifyDelete = ( json ) => {  // Called within deletePopups' postData().  Also a thunk.
  return ( dispatch ) => {

    if ( json === false ) {
      dispatch( setData({
        isFetching: false,
        isDeleted: false,
      }) )

    } else {
      dispatch( updatePopups( json ) )

      dispatch( setData({
        isFetching: false,
        isDeleted: true,
      }) )

      dispatch( clearView() )
    }

    dispatch( setVisibility({ DataMessage: 'DELETE' }) );
  }
}

const verifyFetch = ( json ) => {  // Called within fetchPopups().  Also a thunk.
  return ( dispatch ) => {

    dispatch( setData({
      isFetching: false,
    }) )

    if ( json !== false ) {
      dispatch( updatePopups( json ) )
    }
  }
}


const savePopup = ( view, popups ) => {  // Called by SaveButton.  Main action.  Thunk.
  return (dispatch) => {

    dispatch( setData({ isFetching: true }) )

    const newPopups = {
      ...popups,
      [view.id]: view.popup
    }

    dispatch( postData( newPopups, verifySave ) )
  }
}

const deletePopup = ( id, visibility, popups ) => { // Called by DelButton.  Main action.  Thunk.
  return ( dispatch ) => {
    dispatch( setData({ isFetching: true }) )

    // Define main thunk actions here:
    const doDeletion = () => {

      const strId = "" + id + ""
      const { [strId]: toDelete, ...rest } = popups
      const remainingPopups = { ...rest }

      dispatch( postData( remainingPopups, verifyDelete ) )
      // dispatch( clearView() ) // Calling in verifyDelete to try and eliminated double-spinner.
    }

    // Needed to animate out the sections before deletion:
    handleTransition( dispatch, doDeletion, visibility );
  }
};

const fetchPopups = () => {
  return (dispatch) => {

    dispatch( setData({ isFetching: true }) )

    const url = 'http://localhost/dev/wp-json/chsie_popups/v1/popups'

    fetch( url )
    .then( res => res.json() )
    .then( json => dispatch( verifyFetch( json ) ) )
  }
}


const setData = ( targets ) => ({
  type: types.SET_DATA,
  targets // An object with structure: {targetComponent: true/false/string}
})


const updateField = ( value, label ) => ({
  type: types.UPDATE_FIELD,
  value,
  label
});

const addRule = ( label, newRule ) => ({
    type: types.ADD_RULE,
    label,
    newRule
});

const removeRule = ( label, index ) => ({
    type: types.REMOVE_RULE,
    label,
    index
});

const updateRule = ( value, label, index ) => ({
    type: types.UPDATE_RULE,
    value,
    label,
    index
});


export {
  setVisibility,
  newPopup,
  getSelectedPopup,
  deletePopup,

  savePopup,
  setData,

  fetchPopups,

  selectPopup,
  clearView,
  updateField,
  addRule,
  removeRule,
  updateRule
};
