import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/action';
import Frame from './Frame';

class FrameList extends React.Component {
    getFrames() {
        const { grids, columns, rows, actions } = this.props;
        return grids.map((grid, index) => (
          <Frame 
            key={index}
            id={index}
            grid={grid}
            columns={columns}
            rows={rows}
            actions={{
              switchFrame: actions.switchFrame,
              deleteFrame: actions.deleteFrame,
              addNewFrame: actions.addNewFrame 
            }}
          />
        ));
    }
    render() {
        return (
            <div>
                {this.getFrames()}
            </div>
        );
    }
}

const mapStateToProps = state => state.present.get('canvas').toObject();

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const FrameListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameList);
export default FrameListContainer;