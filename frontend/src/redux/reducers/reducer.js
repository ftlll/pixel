import { List, Map } from 'immutable';
import canvasReducer from './canvasReducer';
import * as type from '../actions/actionTypes';

function setInitialState(state) {
  const cellSize = 10;

  const initialState = {
    cellSize,
  };

  return state.merge(initialState);
}

function generateDefaultState() {
  return setInitialState(Map(), { type: type.SET_INIT_STATE, state: {} });
}

const pipeReducers = reducers => (initialState, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), initialState);

function partialReducer(state, action) {
  switch (action.type) {
    case type.SET_INIT_STATE:
      return setInitialState(state);
    default:
      return state;
  }
}

export default function(state = generateDefaultState(), action) {
  return partialReducer(state, action).merge({
    canvas: canvasReducer(state.get('canvas'), action)
  });
}
