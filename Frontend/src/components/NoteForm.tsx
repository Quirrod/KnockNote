"use client";
import { Dispatch } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "./formComponents/CustomInput";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { noteService } from "../services/note.service";
import { AxiosResponse } from "axios";

interface NoteFormInputs {
  title: string;
  description: string;
}

interface NoteFormProps {
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

function NoteForm({ setModalOpen }: NoteFormProps) {
  const methods = useForm<NoteFormInputs>();

  const createNoteMutation = useMutation({
    mutationFn: (data: NoteFormInputs) => {
      const postNote = noteService.createNote(data);
      // toast.promise(postCode, {
      //   loading: "Sharing Code...",
      //   success: "Code Shared successfully",
      //   error: "Error sharing code",
      // });

      return postNote;
    },
    onSuccess: (response: AxiosResponse) => {
      // router.push(`/code/${response.data.id}`);
      setModalOpen(false);
    },
  });

  function onSubmit(data: NoteFormInputs) {
    createNoteMutation.mutate(data);
  }

  return (
    <>
      <div className="relative flex flex-col rounded-2xl items-center  gap-2">
        <p className="text-sm text-white">New Note</p>
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
                Create Note
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
