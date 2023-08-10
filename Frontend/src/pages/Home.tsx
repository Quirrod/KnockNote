import React from "react";
import { Note } from "../components/Note";
import Pagination from "rc-pagination";
import { LeftRoundArrow, RightRoundArrow } from "iconoir-react";

export const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-text">Welcome to KnockNote</h1>
      <h2 className="text-2xl font-medium text-text">
        KnockNote is a simple note taking app
      </h2>
      <div className="grid auto-rows-auto grid-cols-auto-fill-25 sm:gap-1">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
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
