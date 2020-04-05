import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/action';
import Preview from './Preview';

class PreviewList extends React.Component {
    getFrames() {
        const { grids, columns, rows } = this.props;
        return grids.map((grid, key) => (
          <Preview
            key={key}
            canvas={List([grid])}
            columns={columns}
            rows={rows}
            cellSize={2}
            active={0}
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

const PreviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewList);
export default PreviewListContainer;