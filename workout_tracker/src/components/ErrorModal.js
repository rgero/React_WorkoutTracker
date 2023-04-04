import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ErrorModal = ({closeFunction, errorMessage, shouldBeOpen = false, errorTitle = "Error!"}) => {
    Modal.setAppElement("body");

    const closeModal = () => {
        shouldBeOpen = false;
        closeFunction();
    } 

    return (
          <Modal
            isOpen={shouldBeOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel={errorTitle}
          >
            <Container>
                <h1 className="pb-2">{errorTitle}</h1>
                <Container className="pb-4">
                    {errorMessage}
                </Container>
                <Button onClick={closeModal}>Close</Button>
            </Container>
          </Modal>
      );

}