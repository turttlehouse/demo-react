import React from "react";

const Card = ({ user }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Name : {user?.name}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Email : {user?.email}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
