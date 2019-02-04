import watch from 'redux-watch';

import store from '../store';


const watchVisibility = watch( store.getState, 'store.visibility' );

export default watchVisibility;
