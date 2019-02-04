import * as types from './types';

import store from '../store';
// import watchVisibility from './watcher';


const setVisibility = ( targets ) => ({
  type: types.SET_VISIBILITY,
  targets           // An object of {targetComponent: "OPEN | FADE | CLOSED"}
});


const addPopup = ( nextId ) => ({ // Called in newPopup, not dispatched directly.
  type: types.ADD_POPUP,
  nextId
});


const newPopup = ( visibility, nextId  ) => { // Called by NewButton.  Main action.  Thunk.
  return ( dispatch ) => {

    let initClosed =
      visibility.TextSection === "CLOSED"
      && visibility.StylingSection === "CLOSED"
      && visibility.RulesSection === "CLOSED";

    let initOpen =
      visibility.TextSection === "OPEN"
      && visibility.StylingSection === "OPEN"
      && visibility.RulesSection === "OPEN";

    const doNewPopup = () => {
      dispatch( addPopup( nextId ) );
      dispatch( setVisibility({ // Old sections are closed.  Open new sections.
        TextSection: 'OPENING',
        StylingSection: 'OPENING',
        RulesSection: 'OPENING',
      }) );
    }

    if ( initClosed ) {
        doNewPopup(); // Working.
    }

    if ( initOpen ) {
      dispatch( setVisibility({
        TextSection: 'CLOSING',
        StylingSection: 'CLOSING',
        RulesSection: 'CLOSING',
      }) );

      const unsub = store.subscribe( () => {
        let vis = store.getState().visibility;

        let ready = vis.TextSection === "CLOSED" && vis.StylingSection === "CLOSED" && vis.RulesSection === "CLOSED";

        if ( ready ) {
          console.log("newPopup detected 'ready'!");
          unsub(); // Must unsub before dispatch to prevent recursive loop on state change.

          doNewPopup();
        }

      });
    }






  };

}



const savePopup = ( view ) => ({
  type: types.SAVE_POPUP,
  id: view.id,
  popup: view.popup
});

const deletePopup = ( id ) => ({
  type: types.DELETE_POPUP,
  id
});

const selectPopup = ( id, popup ) => ({
  type: types.SELECT_POPUP,
  id,
  popup
});

const clearView = () => ({
  type: types.CLEAR_VIEW
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
  addPopup,
  newPopup,
  savePopup,
  deletePopup,
  selectPopup,
  clearView,
  updateField,
  addRule,
  removeRule,
  updateRule
};
