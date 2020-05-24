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
    const { color, applyColorPicker, applyPencil } = this.props;
    this.applyColorPicker = (color) => {
      color = color.rgb;
      let colorString = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
      applyColorPicker(colorString);
      applyPencil();
    };

    const styles = {
      picker: {
        position: 'relative',
        bottom: '5em',
        left: '-250px'
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
        right: -250,
        top: 155
      },
      cover: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };

    return (
      <div className={`color-picker ${this.state.visible ? 'active': ''}`}>
        <i className='fas fa-paint-brush' onClick={ this.handleClick } />
          <div style={styles.picker}>
              { this.state.visible ? 
                  <div style={styles.popover}>
                    <div
                      style={styles.cover}
                      onClick={this.handleClose}
                    />
                    <Picker color={ color } onChange={this.applyColorPicker} onClose={this.handleClose} type="sketch"/>
                </div>
         : null }
          </div>
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
      // usingColorPicker: state.present.get('drawingTool') === tool.COLOR_PICKER
  };
};

const mapDispatchToProps = dispatch => ({
  applyColorPicker: (color) => dispatch(applyColorPicker(color)),
  applyPencil: () => dispatch(switchTool(tool.PENCIL))
});

const ColorPickerContainer = connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

export default ColorPickerContainer;
