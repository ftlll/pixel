import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/action';

const UndoRedo = props => {
  const undo = () => {
    props.actions.undo();
  };

  const redo = () => {
    props.actions.redo();
  };

  return (
    <div className="undo-redo">
      <div className='undo-container'>
        <button className='undo fas fa-undo-alt'
          onClick={() => {undo()}} />
      </div>
      <div className='redo-container'>
        <button className='redo fas fa-redo-alt'
          onClick={() => {redo()}} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const UndoRedoContainer = connect(
  null,
  mapDispatchToProps
)(UndoRedo);
export default UndoRedoContainer;