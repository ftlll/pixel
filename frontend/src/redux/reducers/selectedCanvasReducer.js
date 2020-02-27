import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';


const drawPixel = (grid, color, id) => {
    return grid.set(id, color);
}

const applyPencilToGrid = (grid, {color, id}) => {
    const newGrid = drawPixel(grid, color, id);
    return newGrid;
}

const applyPencil = (canvas, action) => {
    const newGrid = applyPencilToGrid(canvas.get('grid'), action);
    const newCanvas = canvas.set('grid', newGrid);
    return newCanvas;
};

const applyEraser = (canvas, action) => {
    const newGrid = drawPixel(canvas.get('grid'), '', action.id);
    const newCanvas = canvas.set('grid', newGrid);
    return newCanvas;
}

export default function(canvas, action) {
    switch (action.type) {
        case type.APPLY_PENCIL:
            return applyPencil(canvas, action);
        case type.APPLY_ERASER:
            return applyEraser(canvas, action);
        default:
            return canvas;
    }
}