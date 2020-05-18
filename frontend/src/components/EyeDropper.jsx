import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const EyeDropper = ({ usingEyeDropper, switchEyeDropper}) => {
    return (
        <i aria-label="EyeDropper Tool"
          onClick={switchEyeDropper}
          className="eyeDropper fas fa-eye-dropper" />
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
