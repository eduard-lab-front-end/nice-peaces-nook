const Modal = () => {
  return (
    <div className="absolute top-[-35px] left-20 max-w-sm p-14 bg-white bg-opacity- border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="max-w-md mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          High-Quality Furniture Just For You
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Our furniture is made from selected and best quality materials that are
        suitable for your dream home
      </p>
      <a
        href="#"
        className="block items-center px-3 py-4 text-sm font-medium text-center text-white bg-[#e89f71] rounded-lg hover:bg-[#ddaf92] focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Modal;
