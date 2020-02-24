import * as types from '../actions/actionTypes';
import { bindActionCreators } from 'redux';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 1)';

const drawPixel = (grid, color, id) => {
    grid.set(id, color);
}

const pencilDraw = (Grid, id) => {

}

export default null;