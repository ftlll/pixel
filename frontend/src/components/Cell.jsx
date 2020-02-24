import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 0.5)';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        const {cell: {color, width}} = this.props;
        const updated = (nextProps.color !== color) || (nextProps.width !== width);
        return updated;
    }

    onMouseDown = (id) => {
        console.log(id);
    }

    render() {
        const {cell: {color, width, id}} = this.props;
        const styles = {
            width: `${width}%`,
            height: `${width}%`,
            backgroundColor:  color || CELL_NULL_COLOR
        };

        

        return (
            <div
              style={styles} className='cell'
              onMouseDown={() => this.onMouseDown(id)}
            />
        );
    }
}

export default Cell;
