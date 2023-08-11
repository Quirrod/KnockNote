import { Archive, DeleteCircle, Edit, UndoAction } from "iconoir-react";
import React from "react";
import Button from "./Button";
import { ConfirmModal } from "./ConfirmModal";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { INote } from "../models/note.model";
import { noteService } from "../services/note.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useLocation } from "react-router";
import { NoteModal } from "./NoteModal";

interface NoteProps {
  note: INote;
  refetch: () => void;
}

export const Note: React.FC<NoteProps> = ({ note, refetch }) => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [isOpenArchive, setIsOpenArchive] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const [isOpenNote, setIsOpenNote] = React.useState(false);
  const location = useLocation();

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
    <>
      <article className="flex sm:flex-row flex-col w-full rounded overflow-hidden shadow-2xl justify-between px-2 sm:py-4">
        <div
          className="w-full cursor-pointer transition duration-500 break-all
          ease-in-out transform hover:-translate-y-1 hover:scale-30"
          onClick={() => {
            setIsOpenNote(true);
          }}
        >
          <h2 className="font-bold text-xl mb-2">{note.title}</h2>
          <p className="text-base line-clamp-3">{note.description}</p>
        </div>
        <div className="flex sm:block pt-4 pb-2 self-center">
          <Button onClick={() => setIsOpenEdit(true)} theme="primary">
            <Edit />
            Edit
          </Button>
          <Button onClick={() => setIsOpenDelete(true)} theme="primary">
            <DeleteCircle />
            Delete
          </Button>
          <Button onClick={() => setIsOpenArchive(true)} theme="secondary">
            {location.pathname === "/archived" ? <UndoAction /> : <Archive />}
            {location.pathname === "/archived" ? "Unarchive" : "Archive"}
          </Button>
        </div>
      </article>
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
        {location.pathname === "/archived"
          ? "Are you sure you want to unarchive this note?"
          : "Are you sure you want to archive this note?"}
      </ConfirmModal>
      <Modal
        isOpen={isOpenEdit}
        setOpen={setIsOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        <NoteForm refetch={refetch} note={note} setModalOpen={setIsOpenEdit} />
      </Modal>
      <NoteModal
        note={note}
        isOpen={isOpenNote}
        setOpen={setIsOpenNote}
        onClose={() => setIsOpenNote(false)}
      />
    </>
  );
};
