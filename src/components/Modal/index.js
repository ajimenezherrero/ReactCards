import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal-root');
    this.el = document.createElement('div');
    this.el.style.cssText = `
      background-color: rgba(0,0,0,0.5);
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;`;
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return createPortal(
      children,
      this.el
    );
  }
}

export default Modal;
