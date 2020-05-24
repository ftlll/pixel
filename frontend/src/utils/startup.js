import * as actions from '../redux/actions/action';
import { initStorage, getDataFromStorage } from './localStorage';

const initialSetup = (dispatch, storage) => {
  const dataStored = getDataFromStorage(storage);

  if (dataStored) {
    // Load current project from the storage
    if (dataStored.current > 0) {
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
    // If no data initialize storage
    initStorage(storage);
  }
};

export default initialSetup;
