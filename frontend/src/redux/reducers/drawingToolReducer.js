import * as type from '../actions/actionTypes';
import * as tool from '../toolTypes';

const switchTool = (drawingTool = tool.PENCIL, action) => {
    if (drawingTool === action.drawingTool) {
        return tool.PENCIL;
    } else {
        return action.drawingTool;
    }
}

export default function drawingToolReducer(drawingTool = tool.PENCIL, action) {
    switch (action.type) {
        case type.SET_INIT_STATE:
            return tool.PENCIL;
        case type.SWITCH_TOOL:
            return switchTool(drawingTool, action);
        case type.APPLY_EYE_DROPPER:
            return tool.PENCIL;
        case type.APPLY_PENCIL:
            return tool.PENCIL;
        case type.SELECT_PALETTE_COLOR:
            return drawingTool;
        default:
            return drawingTool;
    }
};