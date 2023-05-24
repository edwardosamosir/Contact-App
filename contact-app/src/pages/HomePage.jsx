import React, { useEffect } from 'react'
import ContactRow from '../components/ContactRow'
import LoadingScreen from '../components/LoadingScreen'
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, searchQuery } from "../store/action/actionCreator";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  const { contacts, loading } = useSelector(
    (state) => state.contact
  );

  const { query } = useSelector(
    (state) => state.custom
  );

  return (
    <>
      <div className="relative shadow-md sm:rounded-lg p-16 pb-32 w-full ml-8 mr-96 sm:ml-48">
        {loading ? <LoadingScreen /> : (
          <>
            <div className="flex items-center justify-start py-8 bg-white dark:bg-gray-800">
              <label htmlFor="table-search" className="sr-only ">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 w-full sm:w-72 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for contacts"
                  name="query"
                  onChange={(e) => dispatch(searchQuery(e.target.value))}
                />
              </div>
            </div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-6 ">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-6">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-6 w-1/5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.data?.filter((el) =>
                      el.firstName.toLowerCase().includes(query.toLowerCase()) ||
                      el.lastName.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((contact, index) => {
                      return <ContactRow contact={contact} key={contact.id} />;
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  )
}
