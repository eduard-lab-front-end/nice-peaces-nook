import { Link } from "react-router-dom";

const Modal = ({ title, description, btnTitle, path, classes }) => {
  return (
    <div
      className={`md:my-0 max-w-sm bg-white/50 backdrop-filter backdrop-blur-[15px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${classes}`}
    >
      <a href="#">
        <h5 className="max-w-md mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link
        to={path}
        className="block items-center px-3 py-4 text-sm font-medium text-center text-white bg-[#e89f71] rounded-lg hover:bg-[#ddaf92] focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default Modal;
