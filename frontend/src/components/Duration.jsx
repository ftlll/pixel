import React from 'react';
import { connect } from 'react-redux';
import { changeDuration } from '../redux/actions/action';

const Duration = props => {
  const { changeDuration, duration } = props;

  return (
      <div className="duration">
        <label> DURATION
          <input
            type="number"
            value={duration}
            onChange={event => {
                changeDuration(event.target.value);
            }}
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
  changeDuration: (duration) => dispatch(changeDuration(duration))
});

const DurationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Duration);
export default DurationContainer;