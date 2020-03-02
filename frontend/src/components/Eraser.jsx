import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const Eraser = ({ usingEraser, }) => {
    return (
        <button
        type="button"
        aria-label="Eraser Tool"
        />
    );
};

const mapStateToProps = state => ({
    usingEraser: state.get('drawingTool') === tool.ERASER
});
  
const switchEraserAction = switchTool(tool.ERASER);

const mapDispatchToProps = dispatch => ({
    switchEraser: () => dispatch(switchEraserAction)
});

const EraserContainer = connect(mapStateToProps, mapDispatchToProps)(Eraser);

export default EraserContainer;