import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow, ModalImage, Description } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tags, active } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClose}>
        <ModalWindow>
          <ModalImage src={largeImage} alt="" />
          <Description>description: {tags}</Description>
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func,
};
