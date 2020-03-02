import React from 'react';
import './css/imports.css';

import CanvasContainer from './components/Canvas';
//import ColorPicker from './components/ColorPicker';
import Eraser from './components/Eraser';

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
        <CanvasContainer/>
        
        <Eraser />
      </div>
    );
  }
}

export default App;
