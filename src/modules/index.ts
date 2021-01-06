import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import register from './register';

const rootReducer = combineReducers({
  pender: penderReducer,
  register,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
