import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';

//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
//
// const store = createStore(rootReducer,  composeEnhancers(
//   applyMiddleware( thunk )
// ));

export default createStore(
  rootReducer,
  applyMiddleware( thunk )
);

// export default store;
