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
      <button
        type="button"
        onClick={() => {
          undo();
        }}
      >
        <span className="undo-redo__icon--undo" />
      </button>
      <button
        type="button"
        onClick={() => {
          redo();
        }}
      >
        <span className="undo-redo__icon--redo" />
      </button>
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