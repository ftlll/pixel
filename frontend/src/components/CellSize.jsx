import React from 'react';
import { connect } from 'react-redux';
import { changeCellSize } from '../redux/actions/action';
import { TextField } from '@material-ui/core';

const CellSize = props => {
  const { changeCellSize, size } = props;

  return (
      <div className="cell-size">
        <label> Cell Size
          <TextField
            id="outlined-number"
            type="number"
            value={size}
            onChange={event => changeCellSize(event.target.value)}
          />
        </label>
      </div>
  );
};

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    return {
        columns: canvas.get('columns'),
        rows: canvas.get('rows'),
        duration: canvas.get('duration'),
        size: canvas.get('size')
    };
};

const mapDispatchToProps = dispatch => ({
  changeCellSize: (size) => dispatch(changeCellSize(size))
});

const CellSizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellSize);
export default CellSizeContainer;