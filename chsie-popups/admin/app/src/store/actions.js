import * as types from './types';

const setVisibility = ( targets ) => ({
  type: types.SET_VISIBILITY,
  targets           // An object of {targetComponent: "SHOW | FADE | HIDE"}
});

const addPopup = ( nextId, newPopup ) => ({
  type: types.ADD_POPUP,
  nextId,
  newPopup
});

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
  savePopup,
  deletePopup,
  selectPopup,
  clearView,
  updateField,
  addRule,
  removeRule,
  updateRule
};
