import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 0.4)';

class Cell extends React.Component {
    shouldComponentUpdate(nextProps) {
        const {cell: {color, width}} = this.props;
        const updated = (nextProps.color !== color) || (nextProps.width !== width);
        return updated;
    }

    render() {
        const {
            cell: {color, width},
            id,
            drawHandler
            } = this.props;
        const style = {
            width: `${width}%`,
            paddingBottom: `${width}%`,
            backgroundColor:  color || CELL_NULL_COLOR
        };

        return (
            <div
              style={style} className='cell'
              onMouseDown={(ev) => drawHandler.onMouseDown(id, ev)}
              onMouseOver={ev => drawHandler.onMouseOver(id, ev)}
              onFocus={ev => drawHandler.onMouseOver(id, ev)}
              onTouchStart={ev => drawHandler.onMouseDown(id, ev)}
            />
        );
    }
}

export default Cell;
