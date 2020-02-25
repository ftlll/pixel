import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import * as type from './actions/actionTypes';
import reducer from "./reducers/reducer";

let store = createStore(reducer, {
    filter: includeAction([])
});
export default store;
