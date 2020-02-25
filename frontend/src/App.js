import React from 'react';
import './css/imports.css';

import CanvasContainer from './components/Canvas';
import ColorPicker from './components/ColorPicker';

class App extends React.Component {
  
  render() {
    return (
      <div className='background'>
        <CanvasContainer/>
        {/* <ColorPicker /> */}
      </div>
    );
  }
}

export default App;
