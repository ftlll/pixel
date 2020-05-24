import React from 'react';
import { fromJS } from 'immutable';
import Preview from './Preview';
import {
  getDataFromStorage,
  removeProjectFromStorage,
  exportedStringToProjectData
} from '../utils/localStorage';

const browserStorage =
  typeof localStorage === 'undefined' ? null : localStorage;

export default class LoadData extends React.Component {
  importProject() {
    const importedProject = exportedStringToProjectData(
      this.importProjectData.value
    );
    const { actions, close } = this.props;

    if (importedProject) {
      const {
        grids,
        paletteGridData,
        columns,
        rows,
        cellSize
      } = importedProject;

      actions.setCanvas(grids, paletteGridData, cellSize, columns, rows);
      close();
      //actions.sendNotification('Project successfully imported');
    } else {
      //actions.sendNotification("Sorry, the project couldn't be imported");
    }
  }

  removeFromStorage(key, e) {
    const { actions, close } = this.props;
    e.stopPropagation();
    if (browserStorage) {
      const removed = removeProjectFromStorage(browserStorage, key);
      if (removed) {
        // actions.sendNotification('Drawing deleted');
        close();
        // open();
      }
    }
  }

  drawingClick(data) {
    const { actions, close } = this.props;
    actions.setCanvas(
      data.grids,
      data.paletteGridData,
      data.cellSize,
      data.columns,
      data.rows
    );
    close();
  }

  getDrawing() {
    if (browserStorage) {
      const dataStored = getDataFromStorage(browserStorage);
      if (dataStored) {
        if (dataStored.stored.length > 0) {
          return dataStored.stored.map((data, i) => {
            const elem = {
              animate: data.grids.length > 1,
              cellSize: 5, // Unify cellsize for load preview
              columns: data.columns,
              grids: fromJS(data.grids),
              paletteGridData: fromJS(data.paletteGridData),
              rows: data.rows,
              id: i
            };

            return (
              <div
                key={elem.id}
                onClick={() => {
                  this.drawingClick(elem);
                }}
                onKeyPress={() => {
                  this.drawingClick(elem);
                }}
                className="local-data-preview"
                tabIndex={0}>
                <Preview
                  key={elem.id}
                  storedData={elem}
                  active={0}
                  duration={1}
                />
                <div className="local-data-delete"
                  onClick={event => {
                    this.removeFromStorage(elem.id, event);
                  }}>
                    <i className=' fas fa-trash-alt' />
                  </div>
              </div>
            );
          });
        }
      }
    }
    return [];
  }

  giveMeOptions(type) {
        const drawings = this.getDrawing();
        
        const drawingsStored = drawings.length > 0;
        return (
          <div className="load-drawing">
            <h3>Select one of your saved drawings</h3>
            <div
              className={`load-drawing__container
                ${!drawingsStored ? 'empty' : ''}`}
            >
              {drawingsStored
                ? this.getDrawing()
                : 'Nothing saved yet...'}
            </div>
          </div>
        );
  }

  render() {
    const { loadType } = this.props;
    return this.giveMeOptions(loadType);
  }
}
