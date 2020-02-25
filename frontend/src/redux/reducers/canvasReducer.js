import * as type from '../actions/actionTypes';

const initGrid = (numCells) => {
    let grid = [];
    for(let i = 0; i < numCells; i++) {
        grid.push('');
    }
    return grid;
}

const initCanvas = (action = {})  => {
  const options = action.options;
  const columns = options.columns || 16;
  const rows = options.rows || 16;
  let cells = [];
  for(let i = 0; i < rows * columns; i++) {
    cells.push('');
  }
  return {
    cells,
    columns,
    rows,
  }
}

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case type.SET_INIT_STATE:
        return initCanvas(action);
      default:
        return canvas;
    }
  }