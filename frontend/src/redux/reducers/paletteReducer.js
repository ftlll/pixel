import * as type from '../actions/actionTypes';
import * as tool from '../toolTypes';
import { List, Map, fromJS } from 'immutable';

const initPaletteGrid = () => {
    return List([
        'rgb(0,0,0)',
        'rgb(255,0,0)',
        'rgb(255,51,0)',
        'rgb(255,153,0)',
        'rgb(255,255,0)',
        'rgb(153,255,0)',
        'rgb(0,255,0)',
        'rgb(0,255,255)',
        'rgb(0,0,255)',
        'rgb(102,0,255)',
        'rgb(255,0,255)',
        'rgb(192,192,192)',
        'rgb(255,255,255)',
        '',''
    ]).map((color, i) => Map({ color, id: i}));
};

const initPalette = () => {
    return Map({
        grid: initPaletteGrid(),
        active: 0
    });
};

const setPalette = (palette, action) => {
    const { paletteGrid } = action;
    return fromJS({
        grid: paletteGrid,
        active: 0
    });
};

const selectPaletteColor = (palette, action) => {
    return palette.set('active', action.id);
};

const disablePaletteColor = (palette, action) => {
    if ( action.drawingTool === tool.ERASER ) {
        return palette.set('active', -1);
    }
    return palette;
};

const searchForColor = (grid, color) => {
    for (let i = 0; i < grid.size - 1; i++) {
        if (grid.getIn([i, 'color']) === color) {
            return i;
        }
    }
    return -1;
}

const applyEyeDropper = (palette, action) => {
    const color = action.color;
    const grid = palette.get('grid');
    const index = searchForColor(grid, color);
    if (index !== -1) {
        return palette.set('active', index);
    }
    const location = grid.size - 1;
    return palette.merge({
        grid: grid.setIn([location, 'color'], color),
        active: location
    });
};

const applyColorPicker = (palette, action) => {
    const color = action.color;
    const grid = palette.get('grid');
    const active = palette.get('active');
    if (active === -1) {
        return palette.merge({
            grid: grid.setIn([active, 'color'], color),
            active: grid.size - 1
        });
    } else {
        return palette.merge({
            grid: grid.setIn([active, 'color'], color),
            active: active
        });
    }
};

export default function (palette = initPalette(), action) {
    switch (action.type) {
        case type.SET_INIT_STATE:
        case type.NEW_PROJECT:
            return initPalette();
        case type.SET_CANVAS:
            return setPalette(palette, action);
        case type.SELECT_PALETTE_COLOR:
            return selectPaletteColor(palette, action);
        case type.APPLY_EYE_DROPPER:
            return applyEyeDropper(palette, action);
        case type.SWITCH_TOOL:
            return disablePaletteColor(palette, action);
        case type.APPLY_COLOR_PICKER:
            return applyColorPicker(palette, action);
        default:
            return palette;
    }     
}