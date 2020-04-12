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
            actions.addNewFrame();
        }
    
        const deleteFrame = () => {
            actions.deleteFrame(id);
        }
        return (
            <div>
            <Draggable key={id} draggableId={id.toString()} index={id}>
                {provided => (
                    <div onClick={switchFrame}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                        <Preview
                            key={id}
                            canvas={List([grid])}
                            columns={columns}
                            rows={rows}
                            cellSize={3}
                            active={0}
                        />
                        <div onClick={addDuplicate}>+</div>
                        <div onClick={deleteFrame}>-</div>
                    </div>
                )}
            </Draggable>
            </div>
        );
    }
};

export default Frame;