import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPaletteColor } from '../redux/actions/action';
import PaletteCell from './PaletteCell';

class PaletteGrid extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        const { grid, active, selectPaletteColor } = this.props;
        const width = 100 / 6;
        return (
            <div>
                {grid.map((cell, i) => {
                    return (
                        <PaletteCell color={cell.get('color')}
                          acive={active}
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