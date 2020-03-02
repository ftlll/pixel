import { createStore } from "redux";
//import undoable, { includeAction } from 'redux-undo';
import reducer from "./reducers/reducer";
import * as action from './actions/action';
import * as tool from './toolTypes';

let store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(action.applyTools('rgba(1, 1, 1, 1)', 12, 16, 16, tool.PENCIL));

store.dispatch(action.applyTools('#66ff66', 13, 16, 16, tool.PENCIL));

store.dispatch(action.applyTools('#66ff66', 132, 16, 16, tool.PAINT_BUCKET));

store.dispatch(action.applyTools('', 132, 16, 16, tool.ERASER));

unsubscribe();

export default store;
