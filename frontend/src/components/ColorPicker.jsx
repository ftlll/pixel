import React from 'react'
import Picker from 'react-color'
import { connect } from 'react-redux';
import { applyColorPicker, switchTool } from '../redux/actions/action'; 
import * as tool from '../redux/toolTypes';

class ColorPicker extends React.Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  };

  handleClose = () => {
    this.setState({ visible: false })
  };

  render() {
    const { color, applyColorPicker, applyPencil, usingColorPicker } = this.props;
    this.applyColorPicker = (color) => {
      color = color.rgb;
      let colorString = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
      applyColorPicker(colorString);
      applyPencil();
    };

    return (
      <div className={`color-picker ${usingColorPicker ? 'active': ''}`}>
        <i className='fas fa-paint-brush' onClick={ this.handleClick } />
        { this.state.visible ? <div className='popover'>
          <div className='cover' onClick={ this.handleClose }/>
          <Picker color={ color } onChange={this.applyColorPicker} onClose={this.handleClose} type="sketch"/>
        </div> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const palette = state.present.get('palette').toObject();
  const grid = palette.grid;
  const active = palette.active;
  return {
      color: (active === -1) ? 'rgba(49,49,49,1)' : grid.getIn([active, 'color']),
      usingColorPicker: state.present.get('drawingTool') === tool.COLOR_PICKER
  };
};

const mapDispatchToProps = dispatch => ({
  applyColorPicker: (color) => dispatch(applyColorPicker(color)),
  applyPencil: () => dispatch(switchTool(tool.PENCIL))
});

const ColorPickerContainer = connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

export default ColorPickerContainer;
