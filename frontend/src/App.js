import React from 'react';
import './css/imports.css';

import Canvas from './components/Canvas';
import Cell from './components/Cell';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className='background'>
      {/* <div className='header'>222</div> */}
      <Canvas />
      {/* <ColorPicker /> */}
    </div>
  );
}

export default App;
