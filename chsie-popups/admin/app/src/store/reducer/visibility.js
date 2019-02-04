import * as types from '../types';


const visibilityInit = {
  NameSelect: "OPEN",
  NewButton: "OPEN",
  SaveButton: "OPEN",
  DelButton: "OPEN",
  StylingSection: "CLOSED",
  RulesSection: "CLOSED",
  TextSection: "CLOSED",
};

const visibility = ( state = visibilityInit, action ) => {
  switch ( action.type ) {

    case types.SET_VISIBILITY:
      return {
        ...state,
        ...action.targets
      };

    default:
      return state;
  }
};

export default visibility;
