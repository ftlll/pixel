import React from 'react';
import { StyleRoot } from 'radium';
import {
  generatePixelDrawCss,
  generateAnimationCSSData
} from '../utils/generateCSS';
import Animation from './Animation';

const Preview = props => {
    const generatePreview = () => {
        const { duration, storedData, active } = props;
        const { grids, columns, cellSize, animate } =  storedData || props;
        const animation = grids.size > 1 && animate;
        let size =  cellSize || 10;
        let Duration =  duration || 5;
        let animationData;
        let cssString;
    
        const styles = {
          previewWrapper: {
            height: size,
            width: size
          }
        };

        if (animate) {
          animationData = generateAnimationCSSData(
            grids,
            columns,
            size
          )
        } else {
          cssString = generatePixelDrawCss(
            grids.get(active),
            columns,
            size,
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
              <Animation duration={Duration} boxShadow={animationData} />
            </StyleRoot>
            ) : null}
          </div>
        );
      };
    
      const { storedData } = props;
      const { columns, rows, cellSize } = storedData || props;
      let size = cellSize || 10;
      const style = {
        width: `${columns * size}px`,
        height: `${rows * size}px`,
        position: 'relative'
      };
    
      return (
        <div className="preview" style={style}>
          {generatePreview()}
        </div>
      );
}

export default Preview;

