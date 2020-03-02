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

// export function applyPencil(color, id) {
//     return {
//         type: type.APPLY_PENCIL,
//         color,
//         id
//     }
// }

// export function applyEraser(id) {
//     return {
//         type: type.APPLY_ERASER,
//         id
//     }
// }

// export function applyPaintBucket(color, id, columns, rows) {
//     return {
//         type: type.APPLY_PAINT_BUCKET,
//         color,
//         id,
//         columns,
//         rows
//     }
// }

export function applyTools(color, id, columns, rows, drawingTool) {
    return {
        type: `APPLY_${drawingTool}`,
        color,
        id,
        columns,
        rows
    }
}

export function switchTool(tool) {
    return {
        type: type.SWITCH_TOOL,
        tool
    };
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
