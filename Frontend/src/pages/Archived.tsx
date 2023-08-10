import { Note } from "../components/Note";

export const Archived = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-text">KnockNote Archived Notes</h1>
      <h2 className="text-2xl font-medium text-text">
        KnockNote is a simple note taking app
      </h2>
      <div className="flex justify-between flex-wrap">
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
