import React from 'react'
import { Link } from "react-router-dom";
import qontakteLogo from '../assets/qontakte-logo-nobg.png'
import myContacts from '../assets/my-contacts.svg'
import addContact from '../assets/add-contact.svg'

export default function Sidebar() {
  return (
    <>
      <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="logo-sidebar" className="shadow-md bg-red-300 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to={`/`} className="flex items-center pl-2.5 mb-5">
            <img src={qontakteLogo} className="h-9 mr-3 sm:h-10" alt="Qontakte Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">QONTAKTE</span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to={`/`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={myContacts} className="h-6 w-6 mr-3" alt="My Contacts" />
                <span className="flex-1 ml-3 whitespace-nowrap">My Contacts</span>
              </Link>
            </li>
            <li>
              <Link to={`/contacts/add`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={addContact} className="h-6 w-6 mr-3" alt="Add Contact" />
                <span className="ml-3">Add Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

    </>
  )
}
