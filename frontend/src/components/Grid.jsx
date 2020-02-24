import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    
    render() {
        const {style, width, cells} = this.props;
        
        return (
            <div style={style}>
                {cells.map(cell => {
                    return (<Cell cell={cell}/>)
                })}
            </div>
        );
    }
}

export default Grid;
