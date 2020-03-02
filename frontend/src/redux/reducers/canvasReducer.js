import{List, Map} from 'immutable';
import * as type from '../actions/actionTypes';

// const initGrid = (numCells) => {
//     let grid = [];
//     for(let i = 0; i < numCells; i++) {
//         grid.push('');
//     }
//     return grid;
// }

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

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case type.SET_INIT_STATE:
        return initCanvas(action);
      default:
        return canvas;
    }
  }