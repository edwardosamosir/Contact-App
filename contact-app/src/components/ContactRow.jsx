import React from 'react';
import { Link } from "react-router-dom";

export default function ContactRow({ contact }) {
    // console.log(contact)
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={contact.photo} alt="Photo" />
                <div className="pl-3">
                    <div className="text-base font-semibold">{contact.firstName} {contact.lastName}</div>
                </div>
            </th>
            <td className="px-6 py-4">
                {contact.age} years old
            </td>
            <td className="px-6 py-4">
                <Link to={`/contacts/edit/${contact.id}`} type="button" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-10">Edit Contact</Link>
                <Link to={`/contacts/delete/${contact.id}`} type="button" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete Contact</Link>
            </td>
        </tr>
    );
}
