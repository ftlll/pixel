import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    
    render() {
        const {style, row, column} = this.props;
        const cell = {
            color: '#3333ff',
            width: 100/row
        };
        const cells = [];
        for(let i = 0; i < row; i++) {
            cells.push(cell);
        }
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
