import React from 'react';
import { connect } from 'react-redux';
import { applyTools } from '../redux/actions/action';
import drawHandler from '../utils/drawHandler';
import Grid from './Grid';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.drawHandler = drawHandler(this);
    }

    shouldComponentUpdate(newProps) {
        const { grid } = this.props;
        return newProps.grid !== grid;
    }
    
    render() {
        const { props } = this;
        const cells = props.grid.map((color, i) => ({
            id: i,
            width: 100 / props.columns,
            color
        }));
        
        const style = {
            height: 400,
            width: 400,
        };
        return (
            <Grid
              style={style}
              cells={cells}
              drawingTool={props.drawingTool}
              drawHandler={this.drawHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    const drawingTool = state.present.get('drawingTool');
    const palette = state.present.get('palette');
    const activeIndex = palette.get('active');
    const paletteColor = palette.getIn(['grid', activeIndex === -1 ? 0: activeIndex, 'color']);
    return {
        grid: canvas.get('grid'),
        paletteColor,
        drawingTool,
        columns: canvas.get('columns'),
        rows: canvas.get('rows')
    };
};

const mapDispatchToProps = dispatch => ({
    applyTools: cellProps => dispatch(applyTools(cellProps))
});

const CanvasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Canvas);

export default CanvasContainer;
