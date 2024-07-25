import { Modal } from "flowbite-react";
import React from "react";

function FlowModel({ isOpen, toggleModal, title, body, footer }) {
  return (
    <>
      <Modal
        className="h-auto [&>div>div]:rounded-[16px] bg-[#3f3f3f] text-white"
        dismissible
        show={isOpen}
        onClose={toggleModal}>
        <Modal.Header className="bg-[#3f3f3f] dark:text-white">
          {title}
        </Modal.Header>
        <Modal.Body className="bg-[#3f3f3f]">{body}</Modal.Body>
        {footer && (
          <Modal.Footer className="bg-[#3f3f3f]">{footer}</Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default FlowModel;
