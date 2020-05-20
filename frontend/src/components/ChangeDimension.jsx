import React from 'react';
import { connect } from 'react-redux';
import { changeDimensions } from '../redux/actions/action';

const ChangeDimension = props => {
  const { changeDimensions, rows, columns } = props;
  const changeHeight = (newRows) => {
    changeDimensions(columns, newRows);
  };
  const changeWidth = (newColumns) => {
    changeDimensions(newColumns,rows);
  };

  return (
    <div>
      <div className="duration">
        <label> ROWS
          <input
            type="number"
            value={rows}
            onChange={event => {
              changeHeight(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="duration">
        <label> COLUMNS
          <input
            type="number"
            value={columns}
            onChange={event => {
              changeWidth(event.target.value);
            }}
          />
        </label>
      </div>
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
  changeDimensions: (newColumns, newRows) => dispatch(changeDimensions(newColumns, newRows))
});

const ChangeDimensionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeDimension);
export default ChangeDimensionContainer;