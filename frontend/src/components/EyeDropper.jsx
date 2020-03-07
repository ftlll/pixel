import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const EyeDropper = ({ usingEyeDropper, switchEyeDropper}) => {
    return (
        <button
          type="button"
          aria-label="EyeDropper Tool"
          onClick={switchEyeDropper}
          className="eraser"
        />
    );
};

const mapStateToProps = state => ({
    usingEyeDropper: state.present.get('drawingTool') === tool.EYE_DROPPER
});
  
const mapDispatchToProps = dispatch => ({
    switchEyeDropper: () => dispatch(switchTool(tool.EYE_DROPPER))
});

const EyeDropperContainer = connect(mapStateToProps, mapDispatchToProps)(EyeDropper);

export default EyeDropperContainer;
