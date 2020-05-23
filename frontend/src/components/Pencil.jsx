import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const Pencil = ({ usingPencil, switchPencil}) => {
    return (
        <div className={`pencil ${usingPencil ? 'active': ''}`}>
            <i aria-label="Pencil Tool"
            onClick={switchPencil}
            className='fas fa-pencil-alt' />
        </div>
    );
};

const mapStateToProps = state => ({
    usingPencil: state.present.get('drawingTool') === tool.PENCIL
});
  
const mapDispatchToProps = dispatch => ({
    switchPencil: () => dispatch(switchTool(tool.PENCIL))
});

const PencilContainer = connect(mapStateToProps, mapDispatchToProps)(Pencil);

export default PencilContainer;
