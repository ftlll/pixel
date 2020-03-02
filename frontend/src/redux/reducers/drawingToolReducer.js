import * as type from '../actions/actionTypes';
import * as tool from '../toolTypes';

const switchTool = (drawingTool = tool.PENCIL, action) => {
    if (drawingTool === tool) {
        return tool.PENCIL;
    } else {
        return tool;
    }
}

export default function drawingToolReducer(drawingTool = tool.PENCIL, action) {
    switch (action.type) {
        case type.SET_INIT_STATE:
            return tool.PENCIL;
        case type.SWITCH_TOOL:
            return switchTool(drawingTool, action.tool);
        default:
            return drawingTool;
    }
};