import { createStore } from "redux";
import undoable, { includeAction } from 'redux-undo';
import reducer from "./reducers/reducer";
import * as action from './actions/action';

let store = createStore(reducer);

// store.dispatch(action.init());

// store.dispatch(action.setColor('#ffffff'));

console.log(store.getState().get('canvas').get('grid'));

const unsubscribe = store.subscribe(() => console.log(store.getState().get('canvas').get('grid')))

store.dispatch(action.applyPencil('rgba(1, 1, 1, 1)', 12));

store.dispatch(action.applyPencil('#66ff66', 13));

store.dispatch(action.applyPaintBucket('#66ff66', 132, 16, 16));

unsubscribe();

export default store;
