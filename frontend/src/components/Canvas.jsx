import React from 'react';
import Grid from './Grid';

class Canvas extends React.Component {
    
    render() {
        const cell = {
            color: '#3333ff',
            width: 100
        };
        return (<Grid />);
    }
}

export default Canvas;
