import * as type from './actionTypes';
import { ActionCreators } from 'redux-undo';

export function init() {
    return {
        type: type.SET_INIT_STATE
    }
}

export function newProject() {
    return {
        type: type.NEW_PROJECT
    }
}

export function clear() {
    return {
        type: type.CLEAR
    }
}

export function changeName(name) {
    return {
        type: type.CHANGE_NAME,
        name
    }
}

export function changeDimensions(newColumns, newRows) {
    return {
        type: type.CHANGE_DIMENSIONS,
        newColumns,
        newRows
    }
}

export function importPixelate({grids, columns, rows, options}) {
    return {
        type: type.IMPORT_PIXELATE,
        grids,
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

export function addNewFrame() {
    return {
        type: type.ADD_NEW_FRAME,
    }
};

export function addDuplicatedFrame(id) {
    return {
        type: type.ADD_DUPLICATED_FRAME,
        id
    }
};

export function deleteFrame(id) {
    return {
        type: type.DELETE_FRAME,
        id
    }
}

export function switchFrame(id) {
    return {
        type: type.SWITCH_FRAME,
        id
    }
}

export function reorderFrame(initIndex, finalIndex) {
    return {
      type: type.REORDER_FRAMES,
      initIndex,
      finalIndex
    };
}

export function undo() {
    return ActionCreators.undo();
};
  
export function redo() {
    return ActionCreators.redo();
};
  
