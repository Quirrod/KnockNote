import React, { useState } from "react";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import Button from "./Button";
import { Plus } from "iconoir-react";

interface NewNoteButtonProps {
  refetch: () => void;
}

export const NewNoteButton: React.FC<NewNoteButtonProps> = ({ refetch }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalOpen} setOpen={setModalOpen} onClose={() => {}}>
        <NoteForm refetch={refetch} setModalOpen={setModalOpen} />
      </Modal>
      <div
        className="fixed right-1/2
      transform translate-x-1/2
      sm:-translate-x-0 top-2 z-10"
      >
        <Button onClick={() => setModalOpen(true)} theme="secondary">
          New Note <Plus />
        </Button>
      </div>
    </>
  );
};
