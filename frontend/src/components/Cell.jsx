import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 1)';
const WIDTH = 10;

class Cell extends React.Component {
    
    render() {
        const {cell: {color, width}} = this.props;
        const styles = {
            width: `${width}px`,
            height: `${width}px`,
            margin: `${width/10}px`,
            backgroundColor:  color || CELL_NULL_COLOR
        };

        return (
            <div
            style={styles}
            />
        );
    }
}

export default Cell;
