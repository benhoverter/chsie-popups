import * as types from '../types';


const visibilityInit = {
  NameSelect: "SHOW",
  NewButton: "SHOW",
  SaveButton: "SHOW",
  DelButton: "SHOW",
  TextSection: "HIDE",
  StylingSection: "HIDE",
  RulesSection: "HIDE"
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
