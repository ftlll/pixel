import * as type from '../actions/actionTypes';

function initGrid(row, col) {
    let grid = [];
    for(let i = 0; i < row*col; i++) {
        grid.push('');
    }
    return grid;
}

function initCanvas(opions = {}) {

}

export default function(canvas = initCanvas(), action) {
    switch (action.type) {
      case types.SET_INIT_STATE:
        return initCanvas(action);
    }
  }