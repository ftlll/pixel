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

export function applyPencil(color, id) {
    return {
        type: type.APPLY_PENCIL,
        color,
        id
    }
}

export function applyEraser(id) {
    return {
        type: type.APPLY_ERASER,
        id
    }
}

export function applyPaintBucket(color, id) {
    return {
        type: type.APPLY_PAINT_BUCKET,
        color,
        id
    }
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
