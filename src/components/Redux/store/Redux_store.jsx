/** @format */

import { legacy_createStore, applyMiddleware } from 'redux';
import { reducer } from '../Reducer/reducer1';
import { logger } from 'redux-logger';
// import { Authreduce } from './Authreduser/Authreduce';
// import { combineReducers } from 'redux';
// const combine_Reducers = combineReducers({
//   todo: subreducer,
//   aauth: Authreduce,
// });
export const mysstore = legacy_createStore(reducer, applyMiddleware(logger));
