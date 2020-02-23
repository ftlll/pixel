import * as type from './actionTypes';
import { ActionCreators } from 'redux-undo';

export function init() {
    return {
        type: type.SET_INIT_STATE
    }
}

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
  
