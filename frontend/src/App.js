import React from 'react';
import './css/imports.css';

import HeaderContainer from './components/Header';
import CanvasContainer from './components/Canvas';
import ColorPickerContainer from './components/ColorPicker';
import EraserContainer from './components/Eraser';
import EyeDropperContainer from './components/EyeDropper';
import PaletteGridContainer from './components/PaletteGrid';
import PaintBucketContainer from './components/PaintBucket';
import UndoRedoContainer from './components/UndoRedo';
import PopupContainer from './components/Popup';
import ClearContainer from './components/Clear';
import FrameListContainer from './components/FrameList';

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
        <div className='app'>
        <HeaderContainer/>
        <div className='app-content'>
          <div className='side-bar'>
            <FrameListContainer/>
          </div>
          <div className='canvas'>
            <CanvasContainer/>
          </div>
        </div>
        {/* <div className='tools'>
          <ClearContainer />
          <PaletteGridContainer />
          <EraserContainer />
          <PaintBucketContainer />
          <EyeDropperContainer/>
          <UndoRedoContainer />
          <ColorPickerContainer />
          <div onClick={() => this.setPopUp('upload')}>Upload</div>
          <PopupContainer visible={this.state.popUpShown} close={() => this.closePopUp()}/>
        </div> */}
      </div>
      </div>
    );
  }
}

export default App;
