import { keyframes } from 'styled-components';

// configs of the 404 page
const numNumbers = 20;
const numList = [4, 4, 0];
const minTransition = 10;
const maxTransition = 20;
const minTransform = 50;
const maxTransform = 100;
const maxBlur = 2;
const minFontSize = 16;
const maxFontSize = 40;

/**
 * makes an object for floatable number with random values
 * @returns an object
 */
function makeConfig() {
  return {
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
    value: numList[Math.ceil(Math.random() * numList.length) - 1],
    transition:
      Math.ceil(Math.random() * (maxTransition - minTransition)) + minTransition,
    goUp: Boolean(Math.ceil(Math.random() * 2) - 1),
    transform:
      Math.ceil(Math.random() * (maxTransform - minTransform)) + minTransform,
    blur: Math.random() * maxBlur,
    fontSize:
      Math.ceil(Math.random() * (maxFontSize - minFontSize)) + minFontSize,
  };
}

/**
 * makes a keyframe for each floating number in page
 * @param {boolean} goUp should element goes up at first in animation or not
 * @param {number} transform how long should it moves in animation
 * @returns
 */
function customKeyframes(goUp, transform) {
  return keyframes`
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(${goUp ? '-' : '+'}${transform}px);
      }
      100% {
        transform: translateY(0px);
      }
    `;
}

const initialNumListConfigs = [...new Array(numNumbers)].map(
  function makeConfigItem() {
    return makeConfig();
  },
);

export {
  initialNumListConfigs,
  maxBlur,
  maxFontSize,
  minFontSize,
  customKeyframes,
};
