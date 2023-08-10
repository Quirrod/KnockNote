import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
  children: React.ReactNode;
  onClick: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  setOpen,
  onClose,
  children,
  onClick,
}) => {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-text">Are you sure?</h1>
        <p className="text-text">{children}</p>
        <div className="flex justify-between w-1/2">
          <Button onClick={onClick} theme="primary">
            Confirm
          </Button>
          <Button onClick={onClose} theme="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
