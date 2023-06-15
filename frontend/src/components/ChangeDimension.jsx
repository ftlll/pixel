import React from 'react';
import { connect } from 'react-redux';
import { changeHeight, changeWidth } from '../redux/actions/action';
import Editor from './Editor';

const ChangeDimension = props => {
  const { changeHeight, changeWidth, rows, columns } = props;
  
  const updateHeight = (i) => {
    setTimeout(() => changeHeight(rows + i), 100);
  };
  const updateWidth = (i) => {
    setTimeout(() => changeWidth(columns + i), 100) 
  };

  return (
    <div className='change-dimension'>
      <div className="rows">
        <label> 
          ROWS: <Editor value={rows} action={updateHeight}/>
        </label>
      </div>
      <div className="">
        <label> COLUMN: <Editor value={columns} action={updateWidth}/>
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
  changeWidth: (newColumns) => dispatch(changeWidth(newColumns)),
  changeHeight: (newRows) => dispatch(changeHeight(newRows))
});

const ChangeDimensionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeDimension);
export default ChangeDimensionContainer;