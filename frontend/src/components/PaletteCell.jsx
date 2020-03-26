import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 0.5)';

class PlatteCell extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { color } = this.props;
        return color !== nextProps.color;
    }

    render() {
        const { width, color, active, selectPaletteColor, id } = this.props;

        const handleClick = () => selectPaletteColor(id);

        const style = {
            width: `${width}%`,
            height: "30px",
            backgroundColor:  color || CELL_NULL_COLOR
        };
        return (
            <button style={style} onClick={handleClick}/>
        );
    };
};

export default PlatteCell;