"use client";
import { Dispatch, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "./formComponents/CustomInput";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { noteService } from "../services/note.service";
import { AxiosResponse } from "axios";
import { INote } from "../models/note.model";

interface NoteFormInputs {
  title: string;
  description: string;
}

interface NoteFormProps {
  refetch: () => void;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
  note?: INote;
}

function NoteForm({ refetch, setModalOpen, note }: NoteFormProps) {
  const methods = useForm<NoteFormInputs>();
  useEffect(() => {
    if (!note) return;
    methods.reset({
      title: note.title,
      description: note.description,
    });
  }, [note]);

  const NoteMutation = useMutation({
    mutationFn: (data: NoteFormInputs) => {
      if (note) {
        const postNote = noteService.updateNote(note?.id!, data);
        return postNote;
      } else {
        const putNote = noteService.createNote(data);
        return putNote;
      }
      // toast.promise(postCode, {
      //   loading: "Sharing Code...",
      //   success: "Code Shared successfully",
      //   error: "Error sharing code",
      // });
    },
    onSuccess: (response: AxiosResponse) => {
      refetch();
      setModalOpen(false);
    },
  });

  function onSubmit(data: NoteFormInputs) {
    NoteMutation.mutate(data);
  }

  return (
    <>
      <div className="relative flex flex-col rounded-2xl items-center  gap-2">
        <p className="text-sm text-white">
          {note ? "Edit Note" : "Create Note"}
        </p>
        <FormProvider {...methods}>
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <span>
              <CustomInput
                id="title"
                label="Title"
                type="text"
                validations={{
                  required: "Title is required",
                }}
              />
              <CustomInput
                id="description"
                rows={4}
                label="Note"
                type="textarea"
                validations={{
                  required: "Note is required",
                }}
              />
            </span>
            <div className="flex gap-2">
              <Button type="submit" theme="secondary">
                {note ? "Update" : "Create"}
              </Button>
              <Button
                type="button"
                theme="primary"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default NoteForm;
