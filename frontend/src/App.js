import React from 'react';
import './css/imports.css';

import CanvasContainer from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import Eraser from './components/Eraser';

class App extends React.Component {
  
  render() {
    return (
      <div className='background'>
        <CanvasContainer/>
        {/* <ColorPicker /> */}
        <Eraser />
      </div>
    );
  }
}

export default App;
