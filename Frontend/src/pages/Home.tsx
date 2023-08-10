import React, { useEffect } from "react";
import { Note } from "../components/Note";
import Pagination from "rc-pagination";
import { LeftRoundArrow, RightRoundArrow } from "iconoir-react";
import { useQuery } from "@tanstack/react-query";
import { noteService } from "../services/note.service";

export const Home = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["notes"],
    queryFn: () => noteService.getNotes(),
    keepPreviousData: true,
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-text">Welcome to KnockNote</h1>
      <h2 className="text-2xl font-medium text-text">
        KnockNote is a simple note taking app
      </h2>
      <div className="grid auto-rows-auto grid-cols-auto-fill-25 sm:gap-1">
        {isSuccess &&
          data.data[0].map((note) => <Note note={note} key={note.id} />)}
      </div>
      <div className="flex justify-center w-full py-6">
        <Pagination
          className="flex gap-2"
          onChange={(current, pageSize) => {
            console.log("Page changed");
            console.log(current);
            console.log(pageSize);
          }}
          current={1}
          total={3}
          defaultPageSize={6}
          prevIcon={<LeftRoundArrow />}
          nextIcon={<RightRoundArrow />}
          hideOnSinglePage={true}
        />
      </div>
    </>
  );
};
