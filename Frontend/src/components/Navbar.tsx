import { Notes, Menu, Plus } from "iconoir-react";
import Button from "./Button";
import Modal from "./Modal";
import NoteForm from "./NoteForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const linkActiveClass =
    "px-3 py-2 rounded-md text-sm font-medium text-white bg-primary focus:outline-none focus:text-white focus:bg-secondary";
  const linkInactiveClass =
    "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700";

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:py-3 w-full">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Notes />
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <Menu name="menu" />
          </button>
        </div>
      </div>
      <div className="fixed right-1/2">
        <Button onClick={() => setModalOpen(true)} theme="secondary">
          New Note <Plus />
        </Button>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? linkActiveClass : linkInactiveClass
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? linkActiveClass : linkInactiveClass
            }
            to="/archived"
          >
            Archived Notes
          </NavLink>
        </div>
      </div>
      <Modal isOpen={modalOpen} setOpen={setModalOpen} onClose={() => {}}>
        <NoteForm setModalOpen={setModalOpen} />
      </Modal>
    </header>
  );
};
