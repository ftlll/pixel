import React from 'react';
import './css/imports.css';

import Canvas from './components/Canvas';
import Cell from './components/Cell';
import ColorPicker from './components/ColorPicker';

const DEFAULT_ROW = 16;
const DEFAULT_COL = 16;

class App extends React.Component {
  constructor() {
    super();
    const cells = [];
    for(let i = 0; i < DEFAULT_ROW*DEFAULT_COL; i++) {
      let cell = {
        width: 100/DEFAULT_ROW,
        id: i
      };
      cells.push(cell);
    }
    this.state = {
      grid: cells,
      row: DEFAULT_ROW,
      column: DEFAULT_COL
    }
  }

  render() {

    return (
      <div className='background'>
        {/* <div className='header'>222</div> */}
        <Canvas cells={this.state.grid}/>
        {/* <ColorPicker /> */}
      </div>
    );
  }
}

export default App;
