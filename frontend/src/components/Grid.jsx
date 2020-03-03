import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    shouldComponentUpdate(newProps) {
        const { cells } = this.props;
        return newProps.cells !== cells;
    }
    
    render() {
        const {style, cells, drawingTool} = this.props;

        return (
            <div style={style}>
                {cells.map((cell, i) => {
                    return (<Cell cell={cell} key={cell.id} id={i}/>)
                })}
            </div>
        );
    }
}

export default Grid;
