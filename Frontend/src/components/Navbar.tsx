import { Notes, Menu } from "iconoir-react";

export const Navbar = () => {
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 w-full">
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
      <div className="items-center">
        <button
          type="button"
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          New Note
        </button>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <a
            href="#"
            className=" hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </header>
  );
};
