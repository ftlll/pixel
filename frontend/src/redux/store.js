import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import * as type from './actions/actionTypes';
import reducer from "./reducers/reducer";
import * as action from './actions/action';

let store = createStore(reducer);

// store.dispatch(action.init());

// store.dispatch(action.setColor('#ffffff'));

 store.dispatch(action.applyPencil('#ffffff',12));

console.log(store.getState());

//const unsubscribe = store.subscribe(() => console.log(store.getState()))


export default store;
