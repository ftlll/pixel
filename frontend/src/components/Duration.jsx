import React from 'react';
import { connect } from 'react-redux';
import { changeDuration } from '../redux/actions/action';
import Editor from './Editor';

const Duration = props => {
  const { changeDuration, duration } = props;

  const updateDuration = (i) => {
    changeDuration(duration + i);
  };

  return (
      <div className="duration">
        <label> DURATION
          <Editor value={duration} action={updateDuration}/>
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
  changeDuration: (duration) => dispatch(changeDuration(duration))
});

const DurationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Duration);
export default DurationContainer;