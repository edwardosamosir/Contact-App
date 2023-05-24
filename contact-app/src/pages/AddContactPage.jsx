import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../store/action/actionCreator";


export default function AddContactPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: ""
  });

  const [error, setError] = useState(null)

  const contactDataHandler = (event) => {
    const { name, value } = event.target;
    const obj = { ...contactData, [name]: value };

    setContactData(obj);
  };

  const submitNewContact = async (event) => {
    try {
      event.preventDefault();

      if (!contactData.firstName) {
        setError("First name cannot be empty!")
      } else if (!contactData.lastName) {
        setError("Last name cannot be empty!")
      } else if (!contactData.age) {
        setError("Age cannot be empty!")
      } else if (!contactData.photo) {
        setError("Link photo cannot be empty!")
      } else {
        await dispatch(addContact(contactData))
        navigate('/')
      }
    }
    catch (error) {
      console.log(error)
    }
  };


  return (
    <>
      <div className="flex justify-center items-center relative mt-32 sm:ml-52">
        <form onSubmit={submitNewContact}
          action="#"
          className="relative w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-white rounded-lg shadow dark:bg-gray-700 sm:ml-10"
        >
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 bg-blue-50 dark:bg-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add New Contact
            </h3>
          </div>
          <div className="p-10 space-y-6">
            {
              error && <div id="alert-2" className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                  <span>Alert!</span> {error} 
                </div>
              </div>
            }
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  value={contactData.firstName}
                  onChange={contactDataHandler}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  value={contactData.lastName}
                  onChange={contactDataHandler}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Age"
                  value={contactData.age}
                  onChange={contactDataHandler}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Link Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Link Photo"
                  value={contactData.photo}
                  onChange={contactDataHandler}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to My Contacts
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
