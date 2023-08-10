import { Archive, DeleteCircle, Edit } from "iconoir-react";
import React from "react";

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
      <div className="px-6 pt-4 pb-2 self-center">
        <button className="w-full flex bg-primary hover:opacity-70 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          <Edit />
          Edit
        </button>
        <button
          type="button"
          className="w-full flex bg-primary hover:opacity-70 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          <DeleteCircle />
          Delete
        </button>
        <button
          type="button"
          className="w-full flex bg-yellow-400 hover:bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
        >
          <Archive />
          Archive
        </button>
      </div>
    </div>
  );
};
