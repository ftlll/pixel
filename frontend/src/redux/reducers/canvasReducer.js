import{ List, Map, fromJS } from 'immutable';
import * as type from '../actions/actionTypes';

const initCanvas = (action = {})  => {
  const options = action.options || {};
  const columns = parseInt(options.columns, 10) || 16;
  const rows = parseInt(options.rows, 10) || 16;
  const size = parseInt(options.size, 10) || 10;
  const duration = parseInt(options.duration, 10) || 5;

  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }
  let grids = List();
  grids = grids.push(grid);

  return Map({
    name: 'name',
    grids,
    active: 0,
    columns,
    rows,
    size,
    duration
  })
}

const setCanvas = (canvas, action) => {
  const { grids, columns, rows, cellSize, duration } = action;
  return fromJS({
    grids,
    columns,
    rows,
    size: cellSize,
    duration: duration || 5,
    active: 0
  });
};

const importPixelate = (action) => {
  const columns = action.columns;
  const rows = action.rows;
  // const options = action.options;
  const grids = List(action.grids);
  // const size = parseInt(action.size, 10) || 10;
  // const duration = parseInt(action.duration, 10) || 5;

  return Map({
    grids,
    active: 0,
    columns,
    rows,
    // size,
    // duration
  })
}

const changeName = (canvas, action) => {
  return canvas.merge({
    name: action.name
  })
}

const changeDimensionForOne = (grid, columns, rows, newColumns, newRows) => {
  const dRow = newRows - rows;
  const dCol = newColumns - columns;
  let newGrid = grid;

  if (dRow > 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < dRow; j++) {
        newGrid = newGrid.push('');
      }
    }
  } else if (dRow < 0) {
    for (let i = 0; i < columns; i++) {
      for (let j = dRow; j < 0; j++) {
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
      newGrid = newGrid.splice(i + dCol, -dCol);
    }
  }
  return newGrid;
}

const changeDimension = (canvas, action) => {
  const columns = canvas.get('columns');
  const rows = canvas.get('rows');
  const { newColumns, newRows } = action;
  let newGrids = List();
  const grids = canvas.get('grids');
  grids.forEach(grid => {
    newGrids = newGrids.push(changeDimensionForOne(grid, columns, rows, newColumns, newRows))
  });
  
  return canvas.merge({
    grids: newGrids,
    columns: newColumns,
    rows: newRows
  });
};

const changeDuration = (canvas, action) => {
  const duration = action.duration;
  return canvas.merge({
    duration
  }); 
}

const changeCellSize = (canvas, action) => {
  const size = action.size;
  return canvas.merge({
    size
  }); 
}

const addNewFrame = (canvas, action) => {
  const grids = canvas.get('grids');
  const columns = canvas.get('columns');
  const rows = canvas.get('rows');
  let grid = List();
  for(let i = 0; i < rows * columns; i++) {
    grid = grid.push('');
  }
  const newGrids = grids.insert(grids.size, grid);
  return canvas.merge({
    grids: newGrids,
    active: grids.size
  }); 
};

const addDuplicatedFrame = (canvas, action) => {
  const grids = canvas.get('grids');
  const grid = grids.get(action.id);
  const newGrids = grids.insert(action.id, grid);
  return canvas.merge({
    grids: newGrids,
    active: action.id + 1
  }); 
};

const deleteFrame = (canvas, action) => {
  const grids = canvas.get('grids');
  const newGrids = grids.remove(action.id);
  return canvas.merge({
    grids: newGrids,
    active: action.id
  }); 
};

const switchFrame = (canvas, action) => {
  return canvas.merge({
    active: action.id
  }); 
}

const reorderFrame = (canvas, action) => {
  let grids = canvas.get('grids');
  const { initIndex, finalIndex } = action;
  const moveForward = initIndex < finalIndex;
  const insertPos = finalIndex + (moveForward ? 1 : 0);
  const deletePos = initIndex + (moveForward ? 0 : 1);
  const grid = grids.get(initIndex);
  grids = grids.splice(insertPos, 0, grid)
            .splice(deletePos, 1);

  return canvas.merge({
    grids,
    active: finalIndex
  });
};

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case type.SET_INIT_STATE:
      case type.NEW_PROJECT:
        return initCanvas(action);
      case type.SET_CANVAS:
        return setCanvas(canvas, action);
      case type.CHANGE_NAME:
        return changeName(canvas,action);
      case type.CHANGE_DIMENSIONS:
        return changeDimension(canvas, action);
      case type.CHANGE_DURATION:
        return changeDuration(canvas, action);
      case type.CHANGE_DURATION:
        return changeCellSize(canvas, action);
      case type.IMPORT_PIXELATE:
        return importPixelate(action);
      case type.ADD_NEW_FRAME:
        return addNewFrame(canvas);
      case type.ADD_DUPLICATED_FRAME:
        return addDuplicatedFrame(canvas, action);
      case type.DELETE_FRAME:
        return deleteFrame(canvas, action);
      case type.SWITCH_FRAME:
        return switchFrame(canvas, action);
      case type.REORDER_FRAMES:
        return reorderFrame(canvas, action);
      default:
        return canvas;
    }
  }