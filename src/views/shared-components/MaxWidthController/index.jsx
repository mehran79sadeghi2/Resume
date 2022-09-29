import styled from "styled-components";

function MaxWidthController(props) {
  const { as, children, ...properties } = props;

  const Elm = styled[as]`
    width: 100%;

    @media (min-width: 600px) {
      max-width: 550px;
    }
    @media (min-width: 820px) {
      max-width: 800px;
    }
    @media (min-width: 1020px) {
      max-width: 1000px;
    }
    @media (min-width: 1120px) {
      max-width: 1100px;
    }
    @media (min-width: 1220px) {
      max-width: 1200px;
    }
  `;

  return <Elm {...properties} >{children}</Elm>;
}

MaxWidthController.defaultProps = {
  as: "div",
};

export default MaxWidthController;
