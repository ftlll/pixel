import React from 'react';
import { connect } from 'react-redux';
import { changeDimensions } from '../redux/actions/action';

const ChangeDimension = props => {
  const { changeDimensions, rows, columns } = props;
  const changeHeight = (newRows) => {
    newRows = parseInt(newRows, 10);
    changeDimensions(columns, newRows);
  };
  const changeWidth = (newColumns) => {
    newColumns = parseInt(newColumns, 10);
    changeDimensions(newColumns,rows);
  };

  return (
    <div className='change-dimension'>
      <div className="rows">
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
      <div className="">
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