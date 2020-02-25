import { combineReducers } from "redux";
import drawToolReducer from './drawingToolReducer';
import canvasReducer from './canvasReducer';
import * as type from '../actions/actionTypes';

const DEFAULT_ROW = 16;
const DEFAULT_COL = 16;

const initState = (state) => {
  const initState = {
    row: DEFAULT_ROW,
    col: DEFAULT_COL,
  };

  return state.merge(initState);
}

const generateDefaultState = () => {
  return initState(Map(), { type: type.SET_INIT_STATE, state: {} });
}

const Reducer = (state, action) =>  {
    switch (action.type) {
        case type.SET_INIT_STATE:
            return initState(state);
        default:
            return state;
    }
}

export default function(state = generateDefaultState(), action) {
    return Reducer(state, action).merge({
        drawToolReducer: drawToolReducer(state.get('drawingTool'), action),
        canvasReducer: canvasReducer(state.get('canvas'), action)
    })
};
