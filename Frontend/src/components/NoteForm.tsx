"use client";
import { Dispatch } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "./formComponents/CustomInput";
import Button from "./Button";

type NoteFormInputs = {
  message: string;
};

type NoteFormProps = {
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

function NoteForm({ setModalOpen }: NoteFormProps) {
  const methods = useForm<NoteFormInputs>();

  function onSubmit(data: NoteFormInputs) {}

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
                id="note"
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
