import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPaletteColor } from '../redux/actions/action';
import PaletteCell from './PaletteCell';

class PaletteGrid extends React.Component { 

    render() {
        const { grid, active, selectPaletteColor } = this.props;
        const width = 100 / 8;
        return (
            <div className='palette-grid'>
                {grid.map((cell, i) => {
                    return (
                        <PaletteCell color={cell.get('color')}
                          active={active === i}
                          width={width}
                          key={cell.get('id')}
                          id={i}
                          selectPaletteColor={selectPaletteColor}
                        />
                    )
                })}
            </div>
        );
    };
}

const mapStateToProps = state => {
    const palette = state.present.get('palette').toObject();
    return {
        grid: palette.grid,
        active: palette.active
    };
};

const mapDispatchToProps = dispatch =>   
  bindActionCreators(
    {
      selectPaletteColor
    },
    dispatch
);

const PaletteGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteGrid);

export default PaletteGridContainer;