import React from 'react';
import './css/imports.css';

import CanvasContainer from './components/Canvas';
//import ColorPicker from './components/ColorPicker';
import EraserContainer from './components/Eraser';
import PaletteGridContainer from './components/PaletteGrid';
import PaintBucketContainer from './components/PaintBucket';

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
      </div>
    );
  }
}

export default App;
