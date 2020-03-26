//import * as tool from '../redux/toolTypes';

const getCellActionProps = (props, id) => ({
  color: props.grid.get(id),
  id,
  ...props
});

const drawHandlerProvider = canvas => {
    const drawHandlers = (grid) => {
        return {
            onMouseDown(id, ev) {
                ev.preventDefault();
                const { props } = grid;
                const actionProps = getCellActionProps(props, id);
                props.applyTools(actionProps);
                canvas.setState({
                    pressed: true
                });
            },
            onMouseOver(id, ev) {
                ev.preventDefault();
                const { props } = grid;
                const actionProps = getCellActionProps(props, id);
                if (canvas.state.pressed) {
                    props.applyTools(actionProps);
                }
            },
        }
    };
    return {
        onMouseUp() {
            canvas.setState({
                pressed: false
            });
        },
        drawHandlers
    }
} 

export default drawHandlerProvider;