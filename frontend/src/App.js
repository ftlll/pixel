import React from 'react';
import './css/imports.css';

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
        <div className='header'>
          <div className="col-2-3">
            <h2>PIXEL HUB</h2>
          </div>
          <div className="col-1-3">
            <h5>by <a target="_blank" href="https://github.com/ftlll">FTL</a></h5>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=ftlll&repo=pixel&type=star&count=false"
              frameborder="0" scrolling="0" width="100px" height="20px"
            >
            </iframe>
          </div>
        </div>
        <div className='side-bar'>
          <FrameListContainer/>
        </div>
        <div className='canvas'>
          <CanvasContainer/>
        </div>
        <div className='buttons'>

        </div>
        <ClearContainer />
        <PaletteGridContainer />
        <EraserContainer />
        <PaintBucketContainer />
        <EyeDropperContainer/>
        <UndoRedoContainer />
        <ColorPickerContainer />
        <div onClick={() => this.setPopUp('upload')}>Upload</div>
        <PopupContainer visible={this.state.popUpShown} close={() => this.closePopUp()}/>
      </div>
    );
  }
}

export default App;
