import React from 'react';
import Grid from './Grid';

class Canvas extends React.Component {
    
    render() {
        const style = {
            height: 800,
            width: 800,
        };
        return (<Grid style={style} row={20} column={20}/>);
    }
}

export default Canvas;
