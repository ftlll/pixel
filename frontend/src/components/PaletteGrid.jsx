import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { selectPaletteColor } from '../store/actions/action';
import PaletteCell from './PaletteCell';

class PaletteGrid extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        const { grid, active } = this.props;
        const width = 100 / 6;
        return (
            <div>
                {grid.map((color, i) => {
                    return (
                        <PaletteCell color={color}
                          acive = {active}
                          width = {width}
                          key={i}
                          id={i}
                        />
                    )
                })}
            </div>
        );
    };
}

const mapStateToProps = state => {
    const palette = state.get('palette').toObject();
    return {
        grid: palette.grid,
        active: palette.active
    };
};

const mapDispatchToProps = dispatch => ({

});

const PaletteGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteGrid);

export default PaletteGridContainer;