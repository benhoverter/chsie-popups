import * as types from '../types';

const popups = ( state = {}, action ) => {
  switch ( action.type ) {

    case types.SAVE_POPUP:
      return {
        ...state,
        [action.id]: action.popup
      };

    case types.DELETE_POPUP:
      const strId = "" + action.id + "";
      const { [strId]: toDelete, ...rest } = state;

      return {
        ...rest
      };

    default:
      return state;

  }

};

export default popups;
