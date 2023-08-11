import { Archive, DeleteCircle, Edit } from "iconoir-react";
import React from "react";
import Button from "./Button";
import { ConfirmModal } from "./ConfirmModal";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { INote } from "../models/note.model";
import { noteService } from "../services/note.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface NoteProps {
  note: INote;
  refetch: () => void;
}

export const Note: React.FC<NoteProps> = ({ note, refetch }) => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [isOpenArchive, setIsOpenArchive] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);

  const ArchiveNoteMutation = useMutation({
    mutationFn: (data: INote) => {
      data.isArchived = true;
      const archiveNote = noteService.updateNote(data?.id!, data);
      return archiveNote;
      // toast.promise(postCode, {
      //   loading: "Sharing Code...",
      //   success: "Code Shared successfully",
      //   error: "Error sharing code",
      // });
    },
    onSuccess: (response: AxiosResponse) => {
      refetch();
      setIsOpenArchive(false);
    },
  });

  function onArchive(data: INote) {
    ArchiveNoteMutation.mutate(data);
  }

  const DeleteNoteMutation = useMutation({
    mutationFn: (data: INote) => {
      const deleteNote = noteService.deleteNote(data?.id!);
      return deleteNote;
      // toast.promise(postCode, {
      //   loading: "Sharing Code...",
      //   success: "Code Shared successfully",
      //   error: "Error sharing code",
      // });
    },
    onSuccess: (response: AxiosResponse) => {
      refetch();
      setIsOpenDelete(false);
    },
  });

  function onDelete(data: INote) {
    DeleteNoteMutation.mutate(data);
  }

  return (
    <article className="flex w-full rounded overflow-hidden shadow-2xl justify-between">
      <div className="sm:px-6 sm:py-4">
        <h2 className="font-bold text-xl mb-2">{note.title}</h2>
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
        onClick={() => onDelete(note)}
      >
        Are you sure you want to delete this note?
      </ConfirmModal>
      <ConfirmModal
        isOpen={isOpenArchive}
        setOpen={setIsOpenArchive}
        onClose={() => setIsOpenArchive(false)}
        onClick={() => onArchive(note)}
      >
        Are you sure you want to archive this note?
      </ConfirmModal>
      <Modal
        isOpen={isOpenEdit}
        setOpen={setIsOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        <NoteForm refetch={refetch} note={note} setModalOpen={setIsOpenEdit} />
      </Modal>
    </article>
  );
};
