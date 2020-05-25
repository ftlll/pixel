import * as actions from '../redux/actions/action';
import { initStorage, getDataFromStorage } from './localStorage';

const initialSetup = (dispatch, storage) => {
  const dataStored = getDataFromStorage(storage);

  if (dataStored) {
    // Load current project from the storage
    if (dataStored.current >= 0) {
      const {
        grids,
        paletteGridData,
        columns,
        rows,
        cellSize,
        duration
      } = dataStored.stored[dataStored.current];

      dispatch(
        actions.setCanvas(
          grids,
          paletteGridData,
          cellSize,
          columns,
          rows,
          duration
        )
      );
    }
  } else {
    initStorage(storage);
    let newData = getDataFromStorage(storage);
    const {
      grids,
      paletteGridData,
      columns,
      rows,
      cellSize,
      duration
    } = newData.stored[0];

    dispatch(
      actions.setCanvas(
        grids,
        paletteGridData,
        cellSize,
        columns,
        rows,
        duration
      )
    );
  }
};

export default initialSetup;
