import * as types from '../types';

const popups = ( state = {}, action ) => {
  switch ( action.type ) {

    case types.UPDATE_POPUPS:
      return {
        ...action.popups,
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
