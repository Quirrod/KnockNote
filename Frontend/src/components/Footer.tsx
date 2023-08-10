import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" py-10 lg:px-72 w-full backdrop-blur-md">
      <div className="text-sm font-medium text-center leading-loose">
        © 2023 KnockNote. Made with ❤️ by  &nbsp;
        <Link
          className="text-primary"
          to="https://www.linkedin.com/in/joel-jarro/"
          target="_blank"
        >
          Quirrod
        </Link>
      </div>
    </footer>
  );
};
