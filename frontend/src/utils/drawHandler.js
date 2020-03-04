//import * as tool from '../redux/toolTypes';

const getCellActionProps = (props, id) => ({
  color: props.grid.get(id),
  id,
  ...props
});

const drawHandler = (canvas) => {
    return {
        onMouseDown(id, ev) {
            ev.preventDefault();
            const { props } = canvas;
            const actionProps = getCellActionProps(props, id);
            props.applyTools(actionProps);
        },
    }
};

export default drawHandler;