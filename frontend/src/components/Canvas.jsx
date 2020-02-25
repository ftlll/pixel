import React from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';

class Canvas extends React.Component {
    shouldComponentUpdate(newProps) {
        const { cells } = this.props;
        return newProps.cells !== cells;
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
        return (<Grid style={style} cells={cells}/>);
    }
}

const mapStateToProps = state => {
    const canvas = state.get('canvas');
    return {
        grid: canvas.get('grid'),
        columns: canvas.get('columns')
    };
};

const CanvasContainer = connect(
    mapStateToProps,
    //mapDispatchToProps
  )(Canvas);

export default CanvasContainer;
