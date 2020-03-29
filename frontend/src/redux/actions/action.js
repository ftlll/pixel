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

export function changeDimensions(columns, rows, newColumns, newRows) {
    return {
        type: type.CHANGE_DIMENSIONS,
        columns,
        rows,
        newColumns,
        newRows
    }
}

export function importPixelate({grid, columns, rows, options}) {
    return {
        type: type.IMPORT_PIXELATE,
        grid,
        columns,
        rows,
        options
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

export function applyColorPicker(color) {
    return {
        type: type.APPLY_COLOR_PICKER,
        color
    };
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
