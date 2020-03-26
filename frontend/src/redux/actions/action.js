import * as type from './actionTypes';
import { ActionCreators } from 'redux-undo';

export function init() {
    return {
        type: type.SET_INIT_STATE
    }
}

export function clear() {
    return {
        type: type.CLEAR
    }
}

export function importPixelate({grid, columns, rows}) {
    return {
        type: type.IMPORT_PIXELATE,
        grid,
        columns,
        rows
    };
}

export function applyTools({paletteColor = '', color , id, columns, rows, drawingTool}) {
    return {
        type: `APPLY_${drawingTool}`,
        paletteColor,
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

export function selectPaletteColor(id) {
    return {
        type: type.SELECT_PALETTE_COLOR,
        id
    };
}

export function addCustomColor(color) {
    return {
        type: type.ADD_CUSTOM_COLOR,
        color
    };
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
