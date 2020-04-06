import React from 'react';
import { List } from 'immutable';
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
            <div onClick={switchFrame}>
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
        );
    }
};

export default Frame;