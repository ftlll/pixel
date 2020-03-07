import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import reducer from "./reducers/reducer";
import {
    APPLY_ERASER,
    APPLY_EYE_DROPPER,
    APPLY_PAINT_BUCKET,
    APPLY_PENCIL
} from './actions/actionTypes';

const createIncludedActions = () =>
  includeAction([
    APPLY_ERASER,
    APPLY_EYE_DROPPER,
    APPLY_PAINT_BUCKET,
    APPLY_PENCIL
  ]);

let store = createStore(undoable(reducer, {
    filter: createIncludedActions(),
    debug: true
    })
);

export default store;
