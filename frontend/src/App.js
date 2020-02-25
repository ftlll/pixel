import React from 'react';
import './css/imports.css';

import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

class App extends React.Component {
  
  render() {

    return (
      <div className='background'>
        <Canvas/>
        {/* <ColorPicker /> */}
      </div>
    );
  }
}

export default App;
