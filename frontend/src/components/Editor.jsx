import React from 'react';

const Editor = ({ value, action }) => {
  return (
    <div className='editor_container'>
        <div className=''>{value}</div>
        <div className="editor_buttons">
          <button
            onClick={() => action(1)}
            className="editor_button"
          >
            +
          </button>
          <button
            onClick={() => action(-1)}
            className="editor_button"
          >
            -
          </button>
        </div>
    </div>
  );
};

export default Editor;