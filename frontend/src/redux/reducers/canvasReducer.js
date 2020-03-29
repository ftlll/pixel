import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

const initCanvas = (action = {})  => {
  const options = action.options || {};
  const columns = parseInt(options.columns, 10) || 16;
  const rows = parseInt(options.rows, 10) || 16;
  const size = parseInt(options.size, 10) || 10;

  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }
  let grids = List();
  grids = grids.push(grid);

  return Map({
    grids,
    active: 0,
    columns,
    rows,
    size
  })
}

const importPixelate = (action) => {
  const columns = action.columns;
  const rows = action.rows;
  const options = action.options;
  const grids = List(action.grids);
  const size = parseInt(options.size, 10) || 10;

  return Map({
    grids,
    active: 0,
    columns,
    rows,
    size
  })
}

const changeDimensionForOne = (grid, columns, rows, newColumns, newRows) => {
  const dRow = rows - newRows;
  const dCol = columns - newColumns;
  let newGrid = grid;
  if (dRow > 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < dRow; j++) {
        newGrid = newGrid.push('');
      }
    }
  } else if (dRow < 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < dRow; j++) {
        newGrid = newGrid.splice(-1, 1);
      }
    }
  } else if (dCol > 0) {
    for (let i = columns * rows; i > 0; i -= columns) {
      for (let j = 0; j < dCol; j++) {
        newGrid = newGrid.insert(i, '');
      }
    }
  } else if (dCol < 0) {
    for (let i = columns * rows; i > 0; i -= columns) {
      for (let j = 0; j < dCol; j++) {
        newGrid = newGrid.splice(i - 1, 1);
      }
    }
  }
  return newGrid;
}

const changeDimension = (canvas, action) => {
  const columns = canvas.get('columns');
  const rows = canvas.get('rows');
  const newColumns = action.newColumns;
  const newRows = action.newRows;
  const grids = canvas.get('grids').map(grid =>
    Map({
      grids: changeDimensionForOne(grid, columns, rows, newColumns, newRows),
    })
  );
  
  return canvas.merge({
    grids,
    columns: newColumns,
    rows: newRows
  });
};

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