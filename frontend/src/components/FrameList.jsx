import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import * as actions from '../redux/actions/action';
import Frame from './Frame';

class FrameList extends React.Component {
    onDragEnd = result => {
      const { destination, source } = result;
      const { actions } = this.props;

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      actions.reorderFrame(source.index, destination.index);
    }

    getFrames() {
        const { grids, columns, rows, active, actions } = this.props;
        return grids.map((grid, index) => (
          <Frame
            key={index}
            id={index}
            grid={grid}
            columns={columns}
            rows={rows}
            active={active}
            size={grids.size}
            actions={{
              switchFrame: actions.switchFrame,
              deleteFrame: actions.deleteFrame,
              addDuplicatedFrame: actions.addDuplicatedFrame, 
            }}
          />
        ));
    }

    addNewFrame = () => {
      const { actions } = this.props;
      actions.addNewFrame()
    }

    render() {
      const style = {
        frameList: {
          display: 'flex', flexDirection: 'column', marginLeft: '10px', marginBottom: '36px'
        },
        frameListContent: {
          backgroundColor: 'rgba(50, 50, 50, 0.3)',
          width: '140px',
          display: 'flex',
          flex: '1',
          minHeight: '0',
          overflow: 'scroll'
        }
      };
        return (
          <div style={style.frameList}>
            <button type='button' className='frames-list-add' onClick={() => this.addNewFrame()}><div>+</div></button>
            <div style={style.frameListContent}>
              <DragDropContext onDragEnd = {this.onDragEnd} className='framesHandlerContext'>
                <Droppable droppableId="droppable" direction="vertical" className='frames-handler'>
                {provided => (
                  <div ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {this.getFrames()}
                  {provided.placeholder}
                  </div>
                )}
                </Droppable>
              </DragDropContext>
            </div>
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