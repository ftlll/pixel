import React from 'react';
import './css/imports.css';

import CanvasContainer from './components/Canvas';
//import ColorPicker from './components/ColorPicker';
import EraserContainer from './components/Eraser';
import EyeDropperContainer from './components/EyeDropper';
import PaletteGridContainer from './components/PaletteGrid';
import PaintBucketContainer from './components/PaintBucket';
import UndoRedoContainer from './components/UndoRedo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpType: null,
      popUpShown: false
    };
  }

  setPopUp(type) {
    this.setState({
      popUpShown: true,
      popUpType: type,
    });
  }

  closePopUp() {
    this.setState({
      popUpShown: false,
      popUpType: null,
    });
  }

  render() {
    return (
      <div className='background'>
        <CanvasContainer/>
        <PaletteGridContainer />
        <EraserContainer />
        <PaintBucketContainer />
        <EyeDropperContainer/>
        <UndoRedoContainer />
      </div>
    );
  }
}

export default App;
