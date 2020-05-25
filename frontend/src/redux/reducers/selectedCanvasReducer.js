//import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';
import { List } from 'immutable';

const GRID_INIT_COLOR = 'rgba(49, 49, 49, 1)';

const clear = (canvas, action) => {
  const active = canvas.get('active');
  const columns = canvas.get('columns');
  const rows = canvas.get('rows');
  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }
  const newCanvas = canvas.setIn(['grids', active], grid);
  return newCanvas;
}

const drawPixel = (grid, color, id) => {
  return grid.set(id, color);
}

const applyPencilToGrid = (grid, {paletteColor, id}) => {
  const newGrid = drawPixel(grid, paletteColor, id);
  return newGrid;
}

const applyPencil = (canvas, action) => {
  const active = canvas.get('active');
  const grid = canvas.get('grids').get(active);
  const newGrid = applyPencilToGrid(grid, action);
  const newCanvas = canvas.setIn(['grids', active], newGrid);
  return newCanvas;
};

const applyEraser = (canvas, action) => {
  const active = canvas.get('active');
  const grid = canvas.get('grids').get(active);
  const newGrid = drawPixel(grid, '', action.id);
  const newCanvas = canvas.setIn(['grids', active], newGrid);
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
  if (id < (columns - 1) * rows) {
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

const applyPaintBucketToGrid = (grid, { id, paletteColor, columns, rows }) => {
  const originalColor = grid.get(id);
  const cellQueue = [id];
  let newGrid = grid;
  let currentId;
  let adjCells;
  columns = parseInt(columns, 10);
  rows = parseInt(rows, 10);

  while (cellQueue.length > 0) {
    currentId = cellQueue.shift();
    newGrid = drawPixel(newGrid, paletteColor, currentId);
    adjCells = getSameColorAdjCells(newGrid, originalColor, currentId, columns, rows);

    for(let i = 0; i < adjCells.length; i++) {
        let adjId = adjCells[i];
        let adjColor = newGrid.get(adjId);
        if (cellQueue.indexOf(adjId) === -1 && adjColor !== paletteColor) {
          cellQueue.push(adjId);
        }
    }
  }
  return newGrid;
};

const applyPaintBucket = (canvas, action) => {
  const active = canvas.get('active');
  const grid = canvas.get('grids').get(active);
  const newGrid = applyPaintBucketToGrid(grid, action);
  const newCanvas = canvas.setIn(['grids', active], newGrid);
  return newCanvas;
}

export default function(canvas, action) {
    switch (action.type) {
        case type.CLEAR:
            return clear(canvas, action);
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