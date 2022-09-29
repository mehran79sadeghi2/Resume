import {createGlobalStyle} from "styled-components";
import info from "./../../../constants.json";

const { colors } = info;


function CssVariables() {
    const colorsList = Object.keys(colors).map((colorKey) => {
        return `--${colorKey}: ${colors[colorKey]};\n`;
    });


    const GlobalCss = createGlobalStyle`
        :root {
            ${colorsList.join("")}
        }
    `
    return <GlobalCss />;
}

export default CssVariables;