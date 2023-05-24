import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config/api";

export default function DeleteContactPage() {
  const { contactId } = useParams();
  const navigate = useNavigate();
  // console.log(contactId)

  const deleteHandler = (event) => {
    event.preventDefault();
    fetch(`${baseUrl}/${contactId}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Internal Server Error");
        }
      })
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center relative mt-32 sm:rounded-lg sm:ml-52 ">
        <div className="w-full sm:w-auto sm:max-w-xs w-2xl">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-700 ">
            <div className="text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-gray-400 w-24 h-w-24 dark:text-gray-200 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this contact?
              </h3>
              <button
                type="button" onClick={deleteHandler}
                className="w-full sm:w-auto text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mb-2 sm:mb-0 sm:mr-2 sm: justify-center"
              >
                Yes, I'm sure
              </button>
              <Link to={'/'}>
              <button
                type="button"
                className="w-full sm:w-auto text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm: justify-center "
              >
                No, cancel
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
