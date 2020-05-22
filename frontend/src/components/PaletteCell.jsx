import React from 'react';

const CELL_NULL_COLOR = 'rgba(49, 49, 49, 0.5)';

const PlatteCell = props => {
    const { width, color, active, selectPaletteColor, id } = props;

    const handleClick = () => selectPaletteColor(id);

    const style = {
        width: `${width}%`,
        height: '30px',
        backgroundColor:  color || CELL_NULL_COLOR
    };

    return (
        <button style={style} onClick={handleClick} 
            className={`palette-cell ${active ? 'active' : ''}`}/>
    );
};

export default PlatteCell;