import { Button, Modal } from "flowbite-react";
import React from "react";

function FlowModel({ isOpen, toggleModal, title, body, footer }) {
  return (
    <>
      <Modal
        className="h-auto [&>div>div]:rounded-[16px] "
        dismissible
        show={isOpen}
        onClose={toggleModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </>
  );
}

export default FlowModel;
