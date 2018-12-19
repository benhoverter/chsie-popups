import * as types from '../types';

const viewInit = {
  saved: true,
  id: null,
  popup: {}
};

const newPopup = {
  name: "",
  title: "",
  description: "",
  backgroundColor: "#ffffff",
  titleColor: "#4b2e83",
  descriptionColor: "#4b2e83",
  bodyColor: "#444444",
  borderWidth: "1px",
  borderStyle: "none",
  borderColor: "#4b2e83",
  position: "top",
  formId: "0",
  saveToUsermeta: true,
  rules: {
    categories: [],
    tags: [],
    postTypes: []
  }
};

const view = ( state = viewInit, action ) => {
  switch ( action.type ) {

    case types.ADD_POPUP:
      return {
        ...state,
        saved: false,
        id: action.nextId,
        popup: newPopup
      };

    case types.SAVE_POPUP:
      return {
        ...state,
        saved: true
      };

    case types.DELETE_POPUP:
      return {
        ...viewInit
      };

    case types.SELECT_POPUP:
      return {
        ...state,
        saved: true,
        id: action.id,
        popup: action.popup
      };

    case types.CLEAR_VIEW:
      return {
        ...state,
        ...viewInit
      };

    case types.UPDATE_FIELD:
      return {
        ...state,
        saved: false,
        popup: {
          ...state.popup,
          [action.label]: action.value
        }
      };

    case types.ADD_RULE:
      return {
        ...state,
        saved: false,
        popup: {
          ...state.popup,
          rules: {
            ...state.popup.rules,
            [action.label]: [ ...state.popup.rules[action.label], action.newRule ]
          }
        }
      };

    case types.REMOVE_RULE:
      return {
        ...state,
        saved: false,
        popup: {
          ...state.popup,
          rules: {
            ...state.popup.rules,
            [action.label]: [
              ...state.popup.rules[action.label].slice( 0, action.index ),
              ...state.popup.rules[action.label].slice( action.index + 1 )
            ]  // NOTE: &| marks are not removed. Plugin logic must ignore the 0th element's leading char.
          }
        }
      };

    case types.UPDATE_RULE:
      let newArray = [];
      const oldArray = state.popup.rules[action.label];

      if( action.value === "&" || action.value === "|" ) {  // And/Or
        newArray = oldArray.map( ( target, index ) => {
          if ( index === action.index ) {
            return action.value + target.slice( 1 );
          } else {
            return target;
          }
        } );

      } else if ( action.value === "!" || action.value === "$" ) {  // Is/Isn't
        newArray = oldArray.map( ( target, index ) => {
          if ( index === action.index ) {
            return target[0] + action.value + target.slice( 2 );
          } else {
            return target;
          }
        } );

      } else {
        newArray = oldArray.map( ( target, index ) => {  // Select
          if ( index === action.index ) {
            return target.slice( 0, 2 ) + action.value;
          } else {
            return target;
          }
        } );
      }

      return {
        ...state,
        saved: false, // TODO: Visibility not setting.  Fix!
        popup: {
          ...state.popup,
          rules: {
            ...state.popup.rules,
            [action.label]: newArray
          }
        }
      };
    
    default:
      return state;
  }

}

export default view;
