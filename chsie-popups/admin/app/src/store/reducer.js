import { combineReducers } from 'redux';

import view from './reducer/view';
import popups from './reducer/popups';
import visibility from './reducer/visibility';
import data from './reducer/data';


export default combineReducers({
  view,
  popups,
  visibility,
  data,
});
