import React from 'react';
import { StyleRoot } from 'radium';
import {
  generatePixelDrawCss,
  generateAnimationCSSData
} from '../utils/generateCSS';
import Animation from './Animation';

const Preview = props => {
    const generatePreview = () => {
        const { active, duration, storedData } = props;
        const { grids, columns, cellSize, animate } = props;
        const animation = grids.size > 1 && animate;
        let animationData;
        let cssString;
    
        const styles = {
          previewWrapper: {
            height: cellSize,
            width: cellSize
          }
        };

        if (animate) {
          animationData = generateAnimationCSSData(
            grids,
            columns,
            cellSize
          )
          console.log(animationData);
        } else {
          cssString = generatePixelDrawCss(
            grids.get(active),
            columns,
            cellSize,
            'string'
          );
        }

          styles.previewWrapper.boxShadow = cssString;
          styles.previewWrapper.MozBoxShadow = cssString;
          styles.previewWrapper.WebkitBoxShadow = cssString;
    
        return (
          <div style={animation ? null : styles.previewWrapper}>
            {animation ? (
            <StyleRoot>
              <Animation duration={duration} boxShadow={animationData} />
            </StyleRoot>
            ) : null}
          </div>
        );
      };
    
      const { storedData } = props;
      const { columns, rows, cellSize } = storedData || props;
      const style = {
        width: columns * cellSize,
        height: rows * cellSize
      };
    
      return (
        <div className="preview" style={style}>
          {generatePreview()}
        </div>
      );
}

export default Preview;

