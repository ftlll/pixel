import React from 'react';
import { List } from 'immutable';
import { Draggable } from 'react-beautiful-dnd';
import Preview from './Preview';

class Frame extends React.Component {
    render() {
        const {grid, columns, rows, actions, id, active} = this.props;
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
                    className={`frame ${active === id ? 'active': ''}`}>
                        <Preview
                            key={id}
                            grids={List([grid])}
                            columns={columns}
                            rows={rows}
                            cellSize={4}
                            active={0}
                        />
                        <div className="frame-tools">
                            <i onClick={addDuplicate} className='frame-add-icon fas fa-copy' />
                            <i className='frame-add-icon2 fas fa-copy' />
                            <i onClick={deleteFrame} className='frame-delete-icon fas fa-trash-alt' />
                        </div>
                        {/* <div className='frame-id'>{id}</div> */}
                    </div>
                )}
            </Draggable>
        );
    }
};

export default Frame;