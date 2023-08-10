import { Archive, DeleteCircle, Edit } from "iconoir-react";
import React from "react";
import Button from "./Button";
import { ConfirmModal } from "./ConfirmModal";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { INote } from "../models/note.model";

interface NoteProps {
  note: INote;
}

export const Note: React.FC<NoteProps> = ({ note }) => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [isOpenArchive, setIsOpenArchive] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);

  return (
    <article className="flex w-full rounded overflow-hidden shadow-2xl justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{note.title}</div>
        <p className="text-base line-clamp-3">{note.description}</p>
      </div>
      <div className="px-2 pt-4 pb-2 self-center">
        <Button onClick={() => setIsOpenEdit(true)} theme="primary">
          <Edit />
          Edit
        </Button>
        <Button onClick={() => setIsOpenDelete(true)} theme="primary">
          <DeleteCircle />
          Delete
        </Button>
        <Button onClick={() => setIsOpenArchive(true)} theme="secondary">
          <Archive />
          Archive
        </Button>
      </div>
      <ConfirmModal
        isOpen={isOpenDelete}
        setOpen={setIsOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        onClick={() => console.log("Delete")}
      >
        Are you sure you want to delete this note?
      </ConfirmModal>
      <ConfirmModal
        isOpen={isOpenArchive}
        setOpen={setIsOpenArchive}
        onClose={() => setIsOpenArchive(false)}
        onClick={() => console.log("Archive")}
      >
        Are you sure you want to archive this note?
      </ConfirmModal>
      <Modal
        isOpen={isOpenEdit}
        setOpen={setIsOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        <NoteForm setModalOpen={setIsOpenEdit} />
      </Modal>
    </article>
  );
};
