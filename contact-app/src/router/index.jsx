import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../pages/Layout'
import HomePage from '../pages/HomePage'
import AddContactPage from '../pages/AddContactPage'
import EditContactPage from '../pages/EditContactPage'

const router = createBrowserRouter([
    {   
        path: "",
        element : <Layout />,
        children : [
            {
                path : "/",
                element : <HomePage />
            },
            {
                path : "/contacts/add",
                element : <AddContactPage />
            },
            {
                path : "/contacts/edit/:contactId",
                element : <EditContactPage />
            }
        ]
    }
])

export default router