import React from 'react';
import Grid from './Grid';

class Canvas extends React.Component {
    shouldComponentUpdate(newProps) {
        const { cells } = this.props;
        return newProps.cells !== cells;
    }
    
    render() {
        const {cells} = this.props; 
        const style = {
            height: 400,
            width: 400,
        };
        return (<Grid style={style} cells={cells}/>);
    }
}

export default Canvas;
