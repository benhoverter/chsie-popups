import * as types from '../types';

const windowData = getWindowData( 'chsieFormData' )
const forms = windowData.forms ? JSON.parse(windowData.forms) : undefined

const dataInit = {
  isFetching: false,
  isSaved: true,
  isDeleted: true,
  forms: forms,
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

// Factory function to handle possible DNE of window data vars:
function getWindowData( dataObj ) {
  if ( window[dataObj] ) {
    return window[dataObj]
  }
  return {}
}


export default data;
