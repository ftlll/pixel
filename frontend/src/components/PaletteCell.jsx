import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 0.5)';

class PlatteCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { width, color } = this.props;
        const style = {
            width: `${width}%`,
            height: `${width}%`,
            backgroundColor:  color || CELL_NULL_COLOR
        };
        return (
            <button style={style}/>
        );
    };
};

export default PlatteCell;