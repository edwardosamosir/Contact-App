import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDetailContact,
  updateContact,
} from '../store/action/actionCreator';

export default function EditContactPage() {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    dispatch(fetchDetailContact(contactId));
  }, [dispatch, contactId]);

  const { contactDetail, loading, errorMessage, updateStatus } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    if (contactDetail) {
      setFirstName(contactDetail.firstName);
      setLastName(contactDetail.lastName);
      setAge(contactDetail.age);
      setPhoto(contactDetail.photo);
    }
  }, [contactDetail]);


  const editContact = async (event) => {
    try {
      event.preventDefault();
      const objToSend = {
        firstName,
        lastName,
        age,
        photo,
      };
      
      await dispatch(updateContact(objToSend, contactId));
      navigate('/')
    } 
    catch (error) {
      console.log(error)
    }

  };

  return (
    <>
      <div className="flex justify-center items-center relative mt-32 sm:ml-52">
        <form
          onSubmit={editContact}
          action="#"
          className="relative w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-white rounded-lg shadow dark:bg-gray-700 sm:ml-10"
        >
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Contact
            </h3>
          </div>
          <div className="p-10 space-y-6">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
