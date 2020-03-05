import * as type from '../actions/actionTypes';
import * as tool from '../toolTypes';
import { List, Map } from 'immutable';

const initPaletteGrid = () => {
    return List([
        '#F8766D','#F37B59', '#ED8141'
    ]).map((color, i) => Map({ color, id: i}));
};

const initPalette = () => {
    return Map({
        grid: initPaletteGrid(),
        active: 0
    });
};

const selectPaletteColor = (palette, id) => {
    return palette.set('active', id);
};

export default function (palette = initPalette(), action) {
    switch (action.type) {
        case type.SET_INIT_STATE:
            return initPalette();
        case type.SELECT_PALETTE_COLOR:
            return selectPaletteColor(palette, action.id);
        default:
            return palette;
    }     
}