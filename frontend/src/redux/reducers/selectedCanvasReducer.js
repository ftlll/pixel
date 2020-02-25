import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

const drawPixel = (grid, color, id) => {
    grid.set(id, color);
}

const applyPencil = (grid, {color, id}) => {
    drawPixel(grid, color, id);
    return grid;
}

export default function(selectedCanvas, action) {
    switch (action.type) {
        case type.APPLY_PENCIL:
            return applyPencil(selectedCanvas, action);
        default:
            return selectedCanvas;
    }
}