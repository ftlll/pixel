//import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

const GRID_INIT_COLOR = 'rgba(49, 49, 49, 1)';

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

const isSameColor = (colorA, colorB) =>
  (colorA || GRID_INIT_COLOR) === (colorB || GRID_INIT_COLOR);

const getSameColorAdjCells = (grid, color, id, columns, rows) => {
    const sameColorAdjCells = [];

    // test upper cell
    if (id >= columns) {
      if (isSameColor(grid.get(id - columns), color)) {
        sameColorAdjCells.push(id - columns);
      }
    }

    // test bottom cell
    if (id <= (columns - 1) * rows) {
      if (isSameColor(grid.get(id + columns), color)) {
        sameColorAdjCells.push(id + columns);
      }
    }

    // test left cell
    if(id % columns !== 0) {
      if (isSameColor(grid.get(id - 1), color)) {
        sameColorAdjCells.push(id - 1);
      }
    }
    
    //test right cell
    if (id % columns !== (columns - 1)) {
      if (isSameColor(grid.get(id + 1), color)) {
        sameColorAdjCells.push(id + 1);
      }
    }
    return sameColorAdjCells;
};

const applyPaintBucketToGrid = (grid, { id, color, columns, rows }) => {
    const originalColor = grid.get(id);
    const cellQueue = [id];
    let newGrid = grid;
    let currentId;
    let adjCells;

    while (cellQueue.length > 0) {
      currentId = cellQueue.shift();
      newGrid = drawPixel(newGrid, color, currentId);
      adjCells = getSameColorAdjCells(newGrid, originalColor, currentId, columns, rows);

      for(let i = 0; i < adjCells.length; i++) {
          let adjId = adjCells[i];
          let adjColor = newGrid.get(adjId);
          if (cellQueue.indexOf(adjId) === -1 && adjColor !== color) {
            cellQueue.push(adjId);
          }
      }
    }
    return newGrid;
};

const applyPaintBucket = (canvas, action) => {
    const grid = canvas.get('grid');
    const newGrid = applyPaintBucketToGrid(grid, action);
    const newCanvas = canvas.set('grid', newGrid);
    return newCanvas;
}

export default function(canvas, action) {
    switch (action.type) {
        case type.APPLY_PENCIL:
            return applyPencil(canvas, action);
        case type.APPLY_ERASER:
            return applyEraser(canvas, action);
        case type.APPLY_PAINT_BUCKET:
            return applyPaintBucket(canvas, action);
        default:
            return canvas;
    }
}