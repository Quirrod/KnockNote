import { Archive, DeleteCircle, Edit, UndoAction } from "iconoir-react";
import React from "react";
import Button from "./Button";
import { ConfirmModal } from "./ConfirmModal";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { INote } from "../models/note.model";
import { noteService } from "../services/note.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useLocation } from "react-router";
import { NoteModal } from "./NoteModal";
import { toast } from "sonner";
import { Tag } from "./Tag";

interface NoteProps {
  note: INote;
  refetch: () => void;
}

export const Note: React.FC<NoteProps> = ({ note, refetch }) => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [isOpenArchive, setIsOpenArchive] = React.useState(false);
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const [isOpenNote, setIsOpenNote] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const location = useLocation();
  const isArchived = location.pathname === "/archived";

  const ArchiveNoteMutation = useMutation({
    mutationFn: (data: INote) => {
      data.isArchived = !isArchived;
      const archiveNote = noteService.updateNote(data?.id!, {
        note: data,
        originalTags: note.tags!,
      });
      toast.promise(archiveNote, {
        loading: isArchived ? "Unarchiving note..." : "Archiving note...",
        success: isArchived
          ? "Note unarchived successfully"
          : "Note archived successfully",
        error: isArchived ? "Error unarchiving note" : "Error archiving note",
      });
      return archiveNote;
    },
    onSuccess: () => {
      refetch();
      setDisableButton(false);
      setIsOpenArchive(false);
    },

    onError: (error: AxiosError<{ message: string }>) => {
      setDisableButton(false);
      toast.error(
        error.response?.data?.message || isArchived
          ? "Error unarchiving note"
          : "Error archiving note"
      );
    },
  });

  function onArchive(data: INote) {
    setDisableButton(true);
    ArchiveNoteMutation.mutate(data);
  }

  const DeleteNoteMutation = useMutation({
    mutationFn: (data: INote) => {
      const deleteNote = noteService.deleteNote(data?.id!);
      toast.promise(deleteNote, {
        loading: "Deleting note...",
        success: "Note deleted successfully",
        error: "Error deleting note",
      });
      return deleteNote;
    },
    onSuccess: () => {
      refetch();
      setDisableButton(false);
      setIsOpenDelete(false);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setDisableButton(false);
      toast.error(error.response?.data?.message || "Error deleting note");
    },
  });

  function onDelete(data: INote) {
    setDisableButton(true);
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
          {/* put tags show max 3  at the bottom*/}
          <div className="flex flex-wrap justify-end fixed right-0 bottom-0 z-10 gap-1">
            {note.tags?.map((tag) => (
              <Tag key={tag.id} name={tag.name} />
            ))}
          </div>
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
            {isArchived ? <UndoAction /> : <Archive />}
            {isArchived ? "Unarchive" : "Archive"}
          </Button>
        </div>
      </article>
      <ConfirmModal
        isOpen={isOpenDelete}
        setOpen={setIsOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        onClick={() => onDelete(note)}
        disabledConfirm={disableButton}
      >
        Are you sure you want to delete this note?
      </ConfirmModal>
      <ConfirmModal
        isOpen={isOpenArchive}
        setOpen={setIsOpenArchive}
        onClose={() => setIsOpenArchive(false)}
        onClick={() => onArchive(note)}
        disabledConfirm={disableButton}
      >
        {isArchived
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
