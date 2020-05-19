import React from 'react';
import { List } from 'immutable';
import { Draggable } from 'react-beautiful-dnd';
import Preview from './Preview';

class Frame extends React.Component {
    render() {
        const {grid, columns, rows, actions, id} = this.props;
        const switchFrame = () => {
            actions.switchFrame(id);
        };
    
        const addDuplicate = () => {
            actions.addDuplicatedFrame(id);
        }
    
        const deleteFrame = () => {
            actions.deleteFrame(id);
        }
        return (
            <Draggable key={id} draggableId={id.toString()} index={id}>
                {provided => (
                    <div onClick={switchFrame}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className='frame'>
                        <Preview
                            key={id}
                            grids={List([grid])}
                            columns={columns}
                            rows={rows}
                            cellSize={5}
                            active={0}
                        />
                        <i onClick={addDuplicate} className='frame-add fas fa-copy' />
                        <i onClick={deleteFrame} className='frame-delete fas fa-trash-alt' />
                    </div>
                )}
            </Draggable>
        );
    }
};

export default Frame;