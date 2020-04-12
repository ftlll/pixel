import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import * as actions from '../redux/actions/action';
import Frame from './Frame';

class FrameList extends React.Component {
    onDragEnd = result => {
      //
    }

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
          <DragDropContext onDragEnd = {this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
            {provided => (
              <div ref={provided.innerRef}
              {...provided.droppableProps}>
              {this.getFrames()}
              {provided.placeholder}
              </div>
            )}
            </Droppable>
          </DragDropContext>
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