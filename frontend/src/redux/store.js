import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import * as type from './actions/actionTypes';
import reducer from "./reducers/reducer";

let store = createStore(reducer);

store.dispatch({
    type: type.SET_INIT_STATE
});

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()))


export default store;
