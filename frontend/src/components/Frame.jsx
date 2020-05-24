import React from 'react';
import { List } from 'immutable';
import { Draggable } from 'react-beautiful-dnd';
import Preview from './Preview';

class Frame extends React.Component {
    render() {
        const {grid, columns, rows, actions, id, active, size } = this.props;
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
                            <i role="button" onClick={addDuplicate} className='frame-add-icon fas fa-copy' />
                            <i className='frame-add-icon2 fas fa-copy' />
                            <i role="button" onClick={size !== (id + 1) ? deleteFrame: undefined} className={`frame-delete-icon fas fa-trash-alt ${size === (id + 1) ? 'disabled': ''}`}/>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
};

export default Frame;