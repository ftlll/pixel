import React from 'react';
import { connect } from 'react-redux';
import { changeDimensions } from '../redux/actions/action';

const ChangeDimension = props => {
  const { changeDimensions, rows, columns } = this.props;
  const changeHeight = (newRows) => {
    changeDimensions(columns, rows, columns, newRows);
  };
  const changeWidth = (newColumns) => {
    changeDimensions(columns, rows, newColumns,rows);
  };

  return (
    <div>
      <div>1</div>
      <div>2</div>
    </div>
  );
};

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    return {
        columns: canvas.get('columns'),
        rows: canvas.get('rows')
    };
};

const mapDispatchToProps = dispatch => ({
  ChangeDimension: () => dispatch()
});

const ChangeDimensionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeDimension);
export default ChangeDimensionContainer;