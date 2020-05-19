import React from 'react';
import {
  generatePixelDrawCss,
  generateAnimationCSSData
} from '../utils/generateCSS';

const Preview = props => {
    const generatePreview = () => {
        const { active, duration, grids, columns, cellSize } = props;
        //const { canvas, columns, cellSize } = storedData || props;

        let cssString;
    
        const styles = {
          previewWrapper: {
            height: cellSize,
            width: cellSize
          }
        };

        cssString = generatePixelDrawCss(
            grids.get(active),
            columns,
            cellSize,
            'string'
        );
    
          styles.previewWrapper.boxShadow = cssString;
          styles.previewWrapper.MozBoxShadow = cssString;
          styles.previewWrapper.WebkitBoxShadow = cssString;
    
    
        return (
          <div style={styles.previewWrapper}>

          </div>
        );
      };
    
      //const { storedData } = props;
      const { columns, rows, cellSize } = props;
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

