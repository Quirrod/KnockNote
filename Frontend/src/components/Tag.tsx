import { Cancel } from "iconoir-react";
import { ITag } from "../models/tag.model";

interface TagProps {
  name: string;
  setTags?: React.Dispatch<React.SetStateAction<ITag[]>>;
  isForm?: boolean;
}

export const Tag = ({ name, setTags, isForm = false }: TagProps) => {
  return (
    <article className="bg-gray-200 rounded-xl p-2 font-bold flex">
      <p className="text-sm">{name}</p>
      {
        !isForm ? null : (
          <Cancel
            className="ml-2 cursor-pointer hover:opacity-50 
            transition-all duration-300"
            color="red"
            onClick={() =>
              setTags!((prev) => prev.filter((tag) => tag.name !== name))
            }
          />
        )
      }
    </article>
  );
};
