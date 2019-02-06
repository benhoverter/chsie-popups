import * as types from './types';

import store from '../store';


const setVisibility = ( targets ) => ({
  type: types.SET_VISIBILITY,
  targets           // An object of {targetComponent: "FADE | OPEN | OPENING | CLOSED | CLOSING"}
});

// Helper function for thunks that cycle visibility on OPEN/CLOSE animations.
const handleTransition = ( dispatch, doAction, visibility ) => {
  console.log("handleTransition fired.");

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
        // console.log("newPopup detected 'ready'!");
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
  // console.log("getSelectedPopup fired.");
  // console.log("selected id is ", id);

  return ( dispatch ) => {

    const doSelection = () => {
      if ( id === null ) { // Catch in case default option is picked.
        // console.log("id was null.  Clearing view in ", store.getState().view );
        dispatch( clearView() );
      } else {
        // console.log(" id was", id );
        dispatch( selectPopup( id, popups[id] ) );
        dispatch( setVisibility({ // Old sections are closed.  Open new sections.
          TextSection: 'OPENING',
          StylingSection: 'OPENING',
          RulesSection: 'OPENING',
        }) );
      }
    }

    handleTransition( dispatch, doSelection, visibility );
  };
};


const deletePopupById = ( id ) => ({  // Called in deletePopup, not dispatched by component.
  type: types.DELETE_POPUP,
  id
});

const deletePopup = ( id, visibility, popups ) => { // Called by DelButton.  Main action.  Thunk.
  // console.log("deletePopup fired.");
  console.log("deleted id is ", id);
  // console.log("visibility is ", visibility);
  // console.log("popups is ", popups);

  return ( dispatch ) => {

    const doDeletion = () => {
      // console.log("doDeletion fired.");
      dispatch( deletePopupById( id ) );
      // dispatch( selectPopup( 0, popups[0] ) );
    }

    handleTransition( dispatch, doDeletion, visibility );
  }
};


const clearView = () => ({
  type: types.CLEAR_VIEW
});

const savePopup = ( view ) => ({
  type: types.SAVE_POPUP,
  id: view.id,
  popup: view.popup
});

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
  // addPopup,
  newPopup,
  getSelectedPopup,
  deletePopup,

  savePopup,
  selectPopup,
  clearView,
  updateField,
  addRule,
  removeRule,
  updateRule
};
