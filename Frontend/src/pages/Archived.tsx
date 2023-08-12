import { LeftRoundArrow, RightRoundArrow } from "iconoir-react";
import Pagination from "rc-pagination";
import { Note } from "../components/Note";
import { useQuery } from "@tanstack/react-query";
import { noteService } from "../services/note.service";
import { NewNoteButton } from "../components/NewNoteButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Loader } from "../components/Loader";
import { useState } from "react";

export const Archived = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ["notes", search, page],
    queryFn: () => noteService.getNotes(6, page, true, search),
    keepPreviousData: true,
  });
  const [parent] = useAutoAnimate();

  const isFirstPage = page === 1;
  const isLastPage = Math.ceil(data?.data[1]! / 6) === page;

  return (
    <>
      <NewNoteButton refetch={refetch} />
      <h1 className="text-4xl font-bold text-text">KnockNote Archived Notes</h1>
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
          data.data[0].map((note) => (
            <Note refetch={refetch} note={note} key={note.id} />
          ))}

        {isLoading && <Loader />}
      </ul>
      <div className="flex justify-center w-full py-6">
        <Pagination
          className="flex gap-2"
          itemRender={(pageNum, type) => {
            if (type === "page") {
              console.log(page, pageNum);
              return (
                <div
                  className={`px-2 py-1 rounded-md hover:bg-secondary hover:text-white ${
                    page === pageNum
                      ? "bg-secondary text-white cursor-not-allowed"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {pageNum}
                </div>
              );
            }
            return (
              <div
                className={`px-2 py-1 rounded-md hover:bg-secondary hover:text-white ${
                  type === "prev" && isLastPage
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : type === "next" && isFirstPage
                    ? "bg-gray-300 text-gray-500"
                    : "bg-secondary text-white cursor-not-allowed"
                } ${!isFirstPage && type === "prev" ? "cursor-pointer" : ""} ${
                  !isLastPage && type === "next" ? "cursor-pointer" : ""
                }`}
              >
                {type === "prev" && <LeftRoundArrow />}
                {type === "next" && <RightRoundArrow />}
              </div>
            );
          }}
          onChange={(current) => {
            setPage(current);
          }}
          current={page}
          total={isSuccess ? data?.data[1] : 0}
          defaultPageSize={6}
          hideOnSinglePage={true}
          style={{ outline: "none", cursor: "pointer" }}
        />
      </div>
    </>
  );
};
