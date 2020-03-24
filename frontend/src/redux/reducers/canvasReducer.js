import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

const initCanvas = (action = {})  => {
  const options = action.options || {};
  const columns = parseInt(options.columns, 10) || 16;
  const rows = parseInt(options.rows, 10) || 16;

  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }

  return Map({
    grid,
    columns,
    rows
  })
}

const importPixelate = (action) => {
  const columns = action.columns;
  const rows = action.rows;
  const grid = List(action.grid);

  return Map({
    grid,
    columns,
    rows
  })
}

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case type.SET_INIT_STATE:
        return initCanvas(action);
      case type.IMPORT_PIXELATE:
        return importPixelate(action);
      default:
        return canvas;
    }
  }