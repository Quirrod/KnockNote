import { Archive, DeleteCircle, Edit } from "iconoir-react";
import React from "react";
import Button from "./Button";

export const Note = () => {
  return (
    <div className="flex max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Note 1</div>
        <p className="text-base line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-2 pt-4 pb-2 self-center">
        <Button theme="primary">
          <Edit />
          Edit
        </Button>
        <Button theme="primary">
          <DeleteCircle />
          Delete
        </Button>
        <Button theme="secondary">
          <Archive />
          Archive
        </Button>
      </div>
    </div>
  );
};
