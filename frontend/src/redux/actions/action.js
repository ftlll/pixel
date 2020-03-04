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

export function applyTools({color = '' , id, columns, rows, drawingTool}) {
    console.log(color);
    console.log(id);
    console.log(drawingTool);
    return {
        type: `APPLY_${drawingTool}`,
        color,
        id,
        columns,
        rows
    }
}

export function switchTool(drawingTool) {
    return {
        type: type.SWITCH_TOOL,
        drawingTool
    };
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
