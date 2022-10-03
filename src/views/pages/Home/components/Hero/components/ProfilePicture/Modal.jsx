import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const pictureModalRoot = document.getElementById('image-viewer');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    pictureModalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    pictureModalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Modal;
