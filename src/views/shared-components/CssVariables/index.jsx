import React from 'react';
import { createGlobalStyle } from 'styled-components';
import info from '../../../constants.json';

const defaultColors = {
  'text-1': '#333',
  'text-2': '#666',
  'text-3': '#aaa',
  primary: '#54ca95',
  'primary-hover': '#4ec08d',
  'background-color-1': 'white',
  'background-color-2': 'white',
  'background-color-3': 'rgb(245, 255, 251)',
  'scroll-bar': '#cacaca',
  'scroll-bar-hover': '#b4b4b4',
};

const { colors = defaultColors } = info;

export { colors };

/**
 * make variables of css dynamically based on colors object in constants file
 * @returns global css that should we render in domain
 */
function CssVariables() {
  const colorsList = Object.keys(colors).map(function getColorItemString(colorKey) {
    return `--${colorKey}: ${colors[colorKey]};\n`;
  });

  const GlobalCss = createGlobalStyle`
        :root {
            ${colorsList.join('')}
        }
    `;
  return <GlobalCss />;
}

export default CssVariables;
