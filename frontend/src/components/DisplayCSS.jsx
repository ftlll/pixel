import React from 'react';
import {
    exportAnimationData,
    getCssImageClassOutput
} from '../utils/generateCSS';

const DisplayCSS = props => {
    const { grids,
        columns,
        size,
        active,
        animate,
        duration } = props;

    const generateCSS = () => {
        if (animate) {
            const cssAnimationString = exportAnimationData(
                grids,
                columns,
                size,
                duration
            );
            return cssAnimationString;
        } else {
            return getCssImageClassOutput(
                grids.get(active),
                columns,
                size
              );
        }
    }

    return (
        <div className="display-css">
        {animate ? (
            <h4>
            Paste the following code anywhere in the CSS code and assign
            <b> .pixel-art-hub </b>
            class to a HTML element
            </h4>
        ) : (
            <h4>
            Paste the following code anywhere in the CSS code and assign
            <b> .pixel-art-hub </b>
            class to a HTML element
            </h4>
        )}
        <textarea className='css-textarea' readOnly={true} value={generateCSS()}></textarea>
        </div>
    );
};

export default DisplayCSS;