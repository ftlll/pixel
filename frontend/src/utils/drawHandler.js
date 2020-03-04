//import * as tool from '../redux/toolTypes';

const getCellActionProps = (props, id) => ({
  color: props.grid[id],
  id,
  ...props
});

const drawHandler = (canvas) => {
    return {
        onMouseDown(id, ev) {
            ev.preventDefault();
            const { props } = canvas;
            const actionProps = getCellActionProps(props, id);
            console.log(actionProps);
            props.applyTools(actionProps);
        },
    }
};

export default drawHandler;