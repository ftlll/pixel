import React from 'react';
import { connect } from 'react-redux';
import { applyTools } from '../redux/actions/action';
import drawHandlerProvider from '../utils/drawHandler';
import Grid from './Grid';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false};
        this.drawHandlerProvider = drawHandlerProvider(this);
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
            <div onMouseUp={this.drawHandlerProvider.onMouseUp}
                onTouchEnd={this.drawHandlerProvider.onMouseUp}
                onTouchCancel={this.drawHandlerProvider.onMouseUp}>
                <Grid
                style={style}
                cells={cells}
                drawingTool={props.drawingTool}
                drawHandler={this.drawHandlerProvider.drawHandlers(this)}
                />
            </div>
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
        grid: canvas.get('grids').get(canvas.get('active')),
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
