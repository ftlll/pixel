import { createStore } from "redux";
//import undoable, { includeAction } from 'redux-undo';
import reducer from "./reducers/reducer";
import * as action from './actions/action';
import * as tool from './toolTypes';

let store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

 store.dispatch(action.applyTools({ 
    paletteColor: 'rgba(1, 1, 1, 1)',
    id: 12,
    columns: 16,
    rows: 16,
    drawingTool: tool.PENCIL}));

store.dispatch(action.applyTools({ 
    paletteColor: 'rgba(23, 23, 134, 1)',
    id: 123,
    columns: 16,
    rows: 16,
    drawingTool: tool.PENCIL}));

store.dispatch(action.applyTools({ 
    paletteColor: 'yellow',
    id: 14,
    columns: 16,
    rows: 16,
    drawingTool: tool.PAINT_BUCKET }));

store.dispatch(action.applyTools({ 
    paletteColor: undefined,
    id: 234,
    columns: 16,
    rows: 16,
    drawingTool: tool.ERASER}));    


unsubscribe();

export default store;
