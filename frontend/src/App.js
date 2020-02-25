import React from 'react';
import './css/imports.css';

import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

class App extends React.Component {
  
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
