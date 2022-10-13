import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button(props) {
  const { as, children, ...properties } = props;

  const ButtonComponent = styled[as]`
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.22);
    height: 37px;
    border: 2px solid var(--primary);
    display: flex;
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;
    align-items: center;
    border-radius: 100vmax;
    padding: 0 30px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    color: var(--text-1);
    transition: 0.3s;
    user-select: none;
    font-size: 13px;

    &:hover {
      background-color: var(--primary);
      color: white;
    }

    &:active {
      background-color: #45a97d;
      border-color: #45a97d;
    }
  `;

  return <ButtonComponent {...properties}>{children}</ButtonComponent>;
}

Button.defaultProps = {
  as: 'button',
  children: null,
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Button;
