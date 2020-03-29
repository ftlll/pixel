import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

const initCanvas = (action = {})  => {
  const options = action.options || {};
  const columns = parseInt(options.columns, 10) || 16;
  const rows = parseInt(options.rows, 10) || 16;
  const size = parseInt(options.size, 10) || 10;
  const duration = parseInt(options.duration, 10) || 1;

  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }

  return Map({
    grid,
    columns,
    rows,
    size,
    duration
  })
}

const importPixelate = (action) => {
  const columns = action.columns;
  const rows = action.rows;
  const options = action.options;
  const grid = List(action.grid);
  const size = parseInt(options.size, 10) || 10;
  const duration = parseInt(options.duration, 10) || 1;

  return Map({
    grid,
    columns,
    rows,
    size,
    duration
  })
}

const changeDimension = (canvas, action) => {
  const grid = canvas.get('grid');
  const columns = action.columns;
  const rows = action.rows;
  const newColumns = action.newColumns;
  const newRows = action.newRows;
  const dRow = rows - newRows;
  const dCol = columns - newColumns;
  let newGrid = grid;
  if (dRow > 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; i < dRow; i++) {
        newGrid = newGrid.push('');
      }
    }
  } else if (dRow < 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; i < dRow; i++) {
        newGrid = newGrid.splice(-1, 1);
      }
    }
  } else if (dCol > 0) {
    for (let i = columns * rows; i > 0; i -= columns) {
      for (let j = 0; i < dCol; i++) {
        newGrid = newGrid.insert(i, '');
      }
    }
  } else if (dCol < 0) {
    for (let i = columns * rows; i > 0; i -= columns) {
      for (let j = 0; i < dCol; i++) {
        newGrid = newGrid.splice(i - 1, 1);
      }
    }
  } else {
    return grid;
  }
}

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case type.SET_INIT_STATE:
      case type.CLEAR:
        return initCanvas(action);
      case type.CHANGE_DIMENSIONS:
        return changeDimension(canvas, action);
      case type.IMPORT_PIXELATE:
        return importPixelate(action);
      default:
        return canvas;
    }
  }