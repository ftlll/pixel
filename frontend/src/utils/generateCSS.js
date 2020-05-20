import {
    getImageData,
    getImageCssClassOutput,
    getAnimationKeyframes,
    getAnimationCssClassOutput
} from 'box-shadow-pixels';
import { List, Map } from 'immutable';
  
const PIXELART_CSS_CLASS_NAME = 'pixel-art-hub';

export function generatePixelDrawCss(frame, columns, cellSize, type) {
    return getImageData(frame, {
        format: type,
        pSize: cellSize,
        c: columns
    });
}
  
export function getCssImageClassOutput(frame, columns, cellSize) {
    return getImageCssClassOutput(frame, {
        format: 'string',
        pSize: cellSize,
        c: columns,
        cssClassName: PIXELART_CSS_CLASS_NAME
    });
}
  
export function exportAnimationData(frames, columns, cellSize, duration) {
    return getAnimationCssClassOutput(frames, {
        pSize: cellSize,
        c: columns,
        duration,
        cssClassName: PIXELART_CSS_CLASS_NAME
    });
}
  
export function generateAnimationCSSData(frames, columns, cellSize) {
    let newFrames = List();
    let size = frames.size;

    const equalPercentage = 100 / size;
    frames.forEach((frame, index) => {
        let interval = (index === size - 1)
          ? 100
          : Math.round((index + 1) * equalPercentage * 10) / 10;
        console.log(interval);
        let newFrame = Map({
            grid: frame,
            interval
        });
        newFrames = newFrames.push(newFrame);
    })
    return getAnimationKeyframes(newFrames, {
        pSize: cellSize,
        c: columns
    });
}