import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
    
    render() {
        const cell = {
            color: '#3333ff',
            width: 10
        };
        const cells = [];
        for(let i = 0; i < 10; i++) {
            cells.push(cell);
        }
        return (
            <div>
                {cells.map(cell => {
                    return (<Cell cell={cell}/>)
                })}
            </div>
        );
    }
}

export default Grid;
