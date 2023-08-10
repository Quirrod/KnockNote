import React from "react";
import { Note } from "../components/Note";

export const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-text">Welcome to KnockNote</h1>
      <h2 className="text-2xl font-medium text-text">
        KnockNote is a simple note taking app
      </h2>
      <div className="flex flex-wrap">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </>
  );
};
