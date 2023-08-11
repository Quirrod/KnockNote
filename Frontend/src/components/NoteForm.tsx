"use client";
import { Dispatch, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "./formComponents/CustomInput";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { noteService } from "../services/note.service";
import { AxiosError } from "axios";
import { INote } from "../models/note.model";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Tag } from "./Tag";
import { ITag } from "../models/tag.model";

interface NoteFormInputs {
  title: string;
  description: string;
  tag: string;
}

interface NoteFormProps {
  refetch: () => void;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
  note?: INote;
}

function NoteForm({ refetch, setModalOpen, note }: NoteFormProps) {
  const methods = useForm<NoteFormInputs>();
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(false);
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    if (!note) return;
    methods.reset({
      title: note.title,
      description: note.description,
    });
  }, [note]);

  const NoteMutation = useMutation({
    mutationFn: async (data: NoteFormInputs) => {
      if (note) {
        const postNote = noteService.updateNote(note?.id!, data);
        toast.promise(postNote, {
          loading: "Updating note...",
          success: "Note updated successfully",
          error: "Error updating note",
        });
        return postNote;
      } else {
        const putNote = noteService.createNote({
          note: data,
          tags: tags,
        });
        toast.promise(putNote, {
          loading: "Creating note...",
          success: "Note created successfully",
          error: "Error creating note",
        });
        return putNote;
      }
    },
    onSuccess: () => {
      if (window.location.pathname === "/archived") {
        navigate("/");
      } else {
        refetch();
      }
      setDisableButton(false);
      setModalOpen(false);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setDisableButton(false);
      toast.error(error.response?.data?.message || "Error archiving note");
    },
  });

  function onSubmit(data: NoteFormInputs) {
    console.log("te ");
    setDisableButton(true);
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
            className="w-full flex flex-col gap-2"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <CustomInput
              id="title"
              label="Title"
              type="text"
              validations={{
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters long",
                },
              }}
            />
            <CustomInput
              id="description"
              rows={4}
              label="Note"
              type="textarea"
              validations={{
                required: "Note is required",
                minLength: {
                  value: 8,
                  message: "Note must be at least 8 characters long",
                },
              }}
            />
            <CustomInput
              id="tag"
              label="Add Tag"
              type="text"
              validations={{
                minLength: {
                  value: 3,
                  message: "Tags must be at least 3 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/i,
                  message: "Tags must not contain spaces",
                },
              }}
            />

            <Button
              onClick={async () => {
                // trigger validations on tags input
                const isTagCorrect = await methods.trigger("tag");
                // if tag already exist show message
                if (
                  tags.find((tag) => tag.name === methods.getValues("tag"))
                ) {
                  methods.setError("tag", {
                    type: "manual",
                    message: "Tag already exist",
                  });
                  return;
                }

                if (!isTagCorrect || !methods.getValues("tag")) return;
                setTags([...tags, { name: methods.getValues("tag") }]);
                methods.setValue("tag", "");
              }}
              type="button"
              theme="secondary"
            >
              Add tag
            </Button>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag
                  isForm={true}
                  setTags={setTags}
                  key={index}
                  name={tag.name}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button disable={disableButton} type="submit" theme="secondary">
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
