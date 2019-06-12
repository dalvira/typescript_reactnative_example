import { combineReducers } from 'redux';

import helloReducer from './helloReducer';

const rootReducer = combineReducers({
  helloReducer: helloReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const rootReducerExport = rootReducer;

export default rootReducerExport;
