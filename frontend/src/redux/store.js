import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import reducer from "./reducers/reducer";
import * as action from './actions/action';

let store = createStore(reducer);

// store.dispatch(action.init());

// store.dispatch(action.setColor('#ffffff'));

console.log(store.getState().get('canvas').get('grid'));

const unsubscribe = store.subscribe(() => console.log(store.getState().get('canvas').get('grid')))

store.dispatch(action.applyPencil('#66ffff', 12));
console.log('store');
unsubscribe();

export default store;
