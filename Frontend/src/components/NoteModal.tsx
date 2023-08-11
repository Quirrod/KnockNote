import React from "react";
import Modal from "./Modal";
import { INote } from "../models/note.model";

interface NoteModalProps {
  note: INote;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
}

export const NoteModal: React.FC<NoteModalProps> = ({
  note,
  isOpen,
  setOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} onClose={onClose}>
        <h2 className="font-bold text-xl mb-2">{note.title}</h2>
        <p className="text-base">{note.description}</p>
    </Modal>
  );
};
