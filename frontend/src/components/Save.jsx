import React from 'react';
import { connect } from 'react-redux';
import { saveProjectToStorage } from '../utils/localStorage';
import { NotificationManager } from 'react-notifications';

const Save = props => {
    const save = () => {
        const drawingToSave = {
            grids: props.grids,
            paletteGridData: props.paletteGridData,
            cellSize: props.cellSize,
            columns: props.columns,
            rows: props.rows,
            animate: props.grids.size > 1,
        };
        saveProjectToStorage(localStorage, drawingToSave);
        NotificationManager.success('Saved to local storage successfully!');
    }
    return (
        <button className='save'
            type="button"
            onClick={save}>
            SAVE
        </button>
    );
};

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    return {
      grids: canvas.get('grids'),
      columns: canvas.get('columns'),
      rows: canvas.get('rows'),
      cellSize: state.present.get('cellSize'),
      paletteGridData: state.present.getIn(['palette', 'grid'])
    };
  };

const mapDispatchToProps = dispatch => ({
    
});
  
const SaveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Save);

export default SaveContainer;