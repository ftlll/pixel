import React from 'react';
import './css/imports.css';

import Canvas from './components/Canvas';
import Cell from './components/Cell';
import ColorPicker from './components/ColorPicker';

class App extends React.Component {


  render() {
    const cell = {
      color: '#3333ff',
      width: 10
    };
    const cells = [];
    for(let i = 0; i < 100; i++) {
        cells.push(cell);
    }

    return (
      <div className='background'>
        {/* <div className='header'>222</div> */}
        <Canvas cells={cells}/>
        {/* <ColorPicker /> */}
      </div>
    );
  }
}

export default App;
