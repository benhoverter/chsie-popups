import * as types from '../types';

const dataInit = {
  isFetching: false,
  isSaved: true,
  isDeleted: true,
}

const data = ( state = dataInit, action ) => {
  switch ( action.type ) {

    case types.SET_DATA:
      return {
        ...state,
        ...action.targets,
      };

    case types.UPDATE_FIELD:
    case types.ADD_RULE:
    case types.REMOVE_RULE:
    case types.UPDATE_RULE:
      return {
        ...state,
        isSaved: false,
      };

    case types.SELECT_POPUP:
    case types.DELETE_POPUP:
      return {
        ...state,
        isSaved: true,
      }


    default:
      return state;

  }

};

export default data;
