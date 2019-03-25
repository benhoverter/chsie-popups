import * as types from '../types';


const visibilityInit = {
  NameSelect: "OPEN",
  NewButton: "OPEN",
  SaveButton: "CLOSED",
  DelButton: "CLOSED",
  DataMessage: "CLOSED",
  StylingSection: "CLOSED",
  RulesSection: "CLOSED",
  TextSection: "CLOSED",
  Preview: "CLOSED",
};

const visibility = ( state = visibilityInit, action ) => {
  switch ( action.type ) {

    case types.SET_VISIBILITY:
      return {
        ...state,
        ...action.targets
      };

    case types.ADD_POPUP:
    case types.UPDATE_FIELD:
    case types.ADD_RULE:
    case types.REMOVE_RULE:
    case types.UPDATE_RULE:
      return {
        ...state,
        DataMessage: "CLOSED",
      }


    default:
      return state;
  }
};

export default visibility;
