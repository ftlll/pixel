import React from 'react';
import Grid from './Grid';

class Canvas extends React.Component {
    
    render() {
        const style = {
            height: 400,
            width: 400,
        };
        return (<Grid style={style} width={10}/>);
    }
}

export default Canvas;
