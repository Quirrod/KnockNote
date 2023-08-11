import { Note } from "../components/Note";
import Pagination from "rc-pagination";
import { LeftRoundArrow, RightRoundArrow } from "iconoir-react";
import { useQuery } from "@tanstack/react-query";
import { noteService } from "../services/note.service";
import { NewNoteButton } from "../components/NewNoteButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Loader } from "../components/Loader";
import { useState } from "react";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ["notes", search],
    queryFn: () => noteService.getNotes(6, 1, false, search),
    keepPreviousData: true,
  });
  const [parent] = useAutoAnimate();

  return (
    <>
      <NewNoteButton refetch={refetch} />
      <h1 className="text-4xl font-bold text-text">Welcome to KnockNote</h1>
      <h2 className="text-2xl font-medium text-text">
        KnockNote is a simple note taking app
      </h2>
      <input
        type="search"
        className="w-full px-4 py-2 mt-4 text-lg font-lato border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Search tags"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul
        ref={parent}
        className="flex flex-wrap gap-4 sm:grid sm:auto-rows-auto sm:grid-cols-auto-fill-25 sm:gap-1"
      >
        {isSuccess &&
          data?.data[0].map((note) => (
            <Note refetch={refetch} note={note} key={note.id} />
          ))}
        {isLoading && <Loader />}
      </ul>
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
