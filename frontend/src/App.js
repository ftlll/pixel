import React from 'react';
import './css/imports.css';
import init from './utils/startup';
import HeaderContainer from './components/Header';
import CanvasContainer from './components/Canvas';
import ColorPickerContainer from './components/ColorPicker';
import EraserContainer from './components/Eraser';
import EyeDropperContainer from './components/EyeDropper';
import PaletteGridContainer from './components/PaletteGrid';
import PaintBucketContainer from './components/PaintBucket';
import UndoRedoContainer from './components/UndoRedo';
import PopupContainer from './components/Popup';
import NewProjectContainer from './components/NewProject';
import ClearContainer from './components/Clear';
import SaveContainer from './components/Save';
import FrameListContainer from './components/FrameList';
import ChangeDimensionContainer from './components/ChangeDimension';
import DownloadContainer from './components/Download';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpType: null,
      popUpShown: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    init(dispatch, localStorage);
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
    const { popUpShown, popUpType } = this.state;
    return (
      <div className='background'>
        <div className='app'>
        <HeaderContainer/>
        <div className='tool-bar'>
            <NewProjectContainer/>
            <ClearContainer />
            <SaveContainer />
            <button className='upload' onClick={() => this.setPopUp('import')}>IMPORT</button>
            <button className='upload' onClick={() => this.setPopUp('export')}>EXPORT</button>
        </div>
        <div className='app-content'>
          <div className='side-bar col-lg-2'>
            <FrameListContainer/>
          </div>
          <div className='canvas-container col-lg-6'>
            <CanvasContainer/>
          </div>
          <div className='tools col-lg-4'>
            <div className='col-12'>
              <PaletteGridContainer />
              <div className='draw-tools col-12'> 
                <EraserContainer />
                <PaintBucketContainer />
                <EyeDropperContainer/>
                <ColorPickerContainer />
              </div>
              <UndoRedoContainer />
              <ChangeDimensionContainer />
            </div>
          </div>
        </div>
        <PopupContainer visible={popUpShown} popUpType={popUpType} close={() => this.closePopUp()}/>
      </div>
      </div>
    );
  }
}

export default App;
