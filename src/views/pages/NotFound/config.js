import { keyframes } from "styled-components";

const numNumbers = 20;
const numList = [4, 4, 0];
const minTransition = 10;
const maxTransition = 20;
const minTransform = 50;
const maxTransform = 100;
const maxBlur = 2;
const minFontSize = 16;
const maxFontSize = 40;

function makeConfig(value = null) {
  return {
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
    value:
      value === null
        ? numList[Math.ceil(Math.random() * numList.length) - 1]
        : value,
    transition:
      Math.ceil(Math.random() * (maxTransition - minTransition)) +
      minTransition,
    goUp: Boolean(Math.ceil(Math.random() * 2) - 1),
    transform:
      Math.ceil(Math.random() * (maxTransform - minTransform)) + minTransform,
    blur: Math.random() * maxBlur,
    fontSize:
      Math.ceil(Math.random() * (maxFontSize - minFontSize)) + minFontSize,
  };
}

function customKeyframes(goUp, transform) {
  return keyframes`
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(${goUp ? "-" : "+"}${transform}px);
      }
      100% {
        transform: translateY(0px);
      }
    `;
}

const initialNumListConfigs = [...new Array(numNumbers)].map(
  function makeConfigItem() {
    return makeConfig();
  }
);

export {
    initialNumListConfigs,
    maxBlur,
    maxFontSize,
    minFontSize,
    customKeyframes,
};
