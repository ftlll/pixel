import * as type from './actionTypes';
import { ActionCreators } from 'redux-undo';

export function setColor (color) {
    return {
        type: type.SET_COLOR,
        color
    }
};

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  