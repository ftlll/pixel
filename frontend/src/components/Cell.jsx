import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 1)';
const WIDTH = 10;

class Cell extends React.Component {
    
    render() {
        const styles = {
            width: `100px`,
            height: `100px`,
            backgroundColor: CELL_NULL_COLOR
        };

        return (
            <div
            style={styles}
            />
        );
    }
}

export default Cell;
